const router = require('express').Router();
const {
  Group,
  Group_Post,
  Group_Member,
  Group_Post_Like,
  User,
} = require('../../db');

const { requireToken } = require('../authMiddleware');

// helper function
const integrateLikes = async (post) => {
  const likes = await Group_Post_Like.findAll({
    where: { groupPostId: post.id },
  });
  return { post, likes };
};

// helper function
const integrateMembers = async (group) => {
  const members = await Group_Member.findAll({
    where: { groupId: group.id },
  });
  return { group, members };
};

// get all groups
// public access
router.get('/', async (req, res, next) => {
  try {
    const allGroups = await Group.findAll();

    const groupsAndMembers = await Promise.all(
      allGroups.map((group) => integrateMembers(group))
    );
    res.status(200).json(groupsAndMembers);
  } catch (e) {
    console.log('Backend issue fetching all groups');
    next(e);
  }
});

// get single group (inc. posts, post_likes, members)
// must be logged in
router.get('/:groupId', requireToken, async (req, res, next) => {
  try {
    const singleGroup = await Group.findByPk(req.params.groupId, {
      include: [{ model: Group_Post }],
    });

    const memberships = await Group_Member.findAll({
      where: { groupId: req.params.groupId },
    });
    const memberIds = memberships.map((mem) => mem.userId);

    const members = await Promise.all(memberIds.map((id) => User.findByPk(id)));

    res.status(200).json({ singleGroup, members });
  } catch (e) {
    console.log('Backend issue fetching single group');
    next(e);
  }
});

// add a single group
// creatorId is automatically set to token user id
router.post('/', requireToken, async (req, res, next) => {
  try {
    const [newGroup, wasCreated] = await Group.findOrCreate({
      where: {
        name: req.body.name,
        creatorId: req.user.id,
      },
      defaults: {
        name: req.body.name,
        topic: req.body.topic,
        description: req.body.description,
        imageSrc: req.body.imageSrc,
        creatorId: req.user.id,
      },
    });
    if (!wasCreated) return res.status(409).send('Group already exists');
    res.status(201).json(newGroup);
  } catch (e) {
    console.log('Backend issue adding single group');
    next(e);
  }
});

// edit single group
// token user id must match the group creatorId
router.put('/:groupId', requireToken, async (req, res, next) => {
  try {
    const singleGroup = await Group.findByPk(req.params.groupId);
    if (!singleGroup) {
      return res.status(404).send('No group exists!');
    }
    if (req.user.id === singleGroup.creatorId) {
      const updatedGroup = await singleGroup.update(req.body);
      res.json(updatedGroup);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (e) {
    console.error('Backend issue editing a post');
    next(e);
  }
});

// delete single group (& members & posts)
// token user id must match the post creatorId OR you are admin
router.delete('/:groupId', requireToken, async (req, res, next) => {
  try {
    const deletedGroup = await Group.findByPk(req.params.groupId);
    if (!deletedGroup) return res.status(404).send('No group exists!');

    if (req.user.id === deletedGroup.creatorId || req.user.role === 'admin') {
      await deletedGroup.destroy();
      res.json({
        deletedGroup,
      });
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (e) {
    console.log('Backend issue deleting post');
    next(e);
  }
});

// get all groups a user is a member of
// must be logged in
router.get('/memberships', requireToken, async (req, res, next) => {
  try {
    const memberships = await Group_Member.findAll({
      where: { userId: req.params.id },
    });

    if (!memberships) {
      return res.status(404).send('This user has no group memberships!');
    }

    const groupIds = memberships.map((mem) => mem.groupId);

    const groups = await Promise.all(
      groupIds.map((groupId) => Group.findByPk(groupId))
    );

    res.status(200).json(groups);
  } catch (e) {
    console.log('Backend issue fetching all groups per member');
    next(e);
  }
});

// get all members per group
// must be logged in
router.get('/:groupId/members', requireToken, async (req, res, next) => {
  try {
    const memberships = await Group_Member.findAll({
      where: { groupId: req.params.groupId },
    });
    const memberIds = memberships.map((mem) => mem.userId);

    const members = await Promise.all(memberIds.map((id) => User.findByPk(id)));
    res.status(200).json(members);
  } catch (e) {
    console.log('Backend issue fetching single group');
    next(e);
  }
});

// add group member
// userId is automatically set to token user id
router.post(
  '/:groupId/members/:memberId',
  requireToken,
  async (req, res, next) => {
    try {
      console.log('this got to the route');
      console.log('user --> ', req.user);
      const [newMember, wasCreated] = await Group_Member.findOrCreate({
        where: {
          userId: req.user.id,
          groupId: req.params.groupId,
        },
      });
      if (!wasCreated)
        return res.status(409).send('Group Member already exists');
      res.status(201).json(newMember);
    } catch (e) {
      console.log('Backend issue adding group_member');
      next(e);
    }
  }
);

// delete group member
// token user id must match the group_member userId OR you are admin
router.delete(
  '/:groupId/members/:memberId',
  requireToken,
  async (req, res, next) => {
    try {
      const deletedMember = await Group_Member.findOne({
        where: { groupId: req.params.groupId, userId: req.params.memberId },
      });
      if (!deletedMember)
        return res.status(404).send('That group_member does not exist!');
      if (req.user.id === deletedMember.userId || req.user.role === 'admin') {
        await deletedMember.destroy();
        res.json(deletedMember);
      } else {
        res
          .status(403)
          .send(
            'Inadequate access rights / Requested user does not match logged-in user'
          );
      }
    } catch (e) {
      console.log('Backend issue deleting group_member');
      next(e);
    }
  }
);

// get all group posts (& likes)
// must be logged in
router.get('/:groupId/posts', requireToken, async (req, res, next) => {
  try {
    const singleGroupPosts = await Group_Post.findAll({
      where: { groupId: req.params.groupId },
      include: { model: User },
    });
    const groupPostsAndLikes = await Promise.all(
      singleGroupPosts.map((post) => integrateLikes(post))
    );
    res.status(200).json(groupPostsAndLikes);
  } catch (e) {
    console.log('Backend issue fetching all posts');
    next(e);
  }
});

// get a single group post (& likes)
// must be logged in
router.get('/:groupId/posts/:postId', requireToken, async (req, res, next) => {
  try {
    const singleGroupPost = await Group_Post.findByPk(req.params.postId);
    const singleGroupPostAndLikes = await integrateLikes(singleGroupPost);

    res.status(200).json(singleGroupPostAndLikes);
  } catch (e) {
    console.log('Backend issue fetching all posts');
    next(e);
  }
});

// add a single group post
// creatorId is automatically set to token user id
router.post('/:groupId/posts', requireToken, async (req, res, next) => {
  try {
    const [newGroupPost, wasCreated] = await Group_Post.findOrCreate({
      where: {
        content: req.body.content,
        userId: req.user.id,
        groupId: req.params.groupId,
      },
      defaults: {
        content: req.body.content,
        userId: req.user.id,
        groupId: req.params.groupId,
      },
    });
    if (!wasCreated) return res.status(409).send('Group Post already exists');
    res.status(201).json(newGroupPost);
  } catch (e) {
    console.log('Backend issue adding single group_post');
    next(e);
  }
});

// edit group post
// token user id must match the group_member userId (no admin permission)
router.put('/:groupId/posts/:postId', requireToken, async (req, res, next) => {
  try {
    const singleGroupPost = await Group_Post.findByPk(req.params.postId);
    if (!singleGroupPost) {
      return res.status(404).send('No post exists!');
    }
    if (req.user.id === singleGroupPost.userId) {
      const updatedGroupPost = await singleGroupPost.update(req.body);
      res.json(updatedGroupPost);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (e) {
    console.error('Backend issue editing a group_post');
    next(e);
  }
});

// delete group post (& likes)
// token user id must match the group_post userId OR match the group creatorId
router.delete(
  '/:groupId/posts/:postId',
  requireToken,
  async (req, res, next) => {
    try {
      const deletedGroupPost = await Group_Post.findByPk(req.params.postId);
      if (!deletedGroupPost) return res.status(404).send('No post exists!');
      const group = await Group.findByPk(deletedGroupPost.groupId);
      if (
        req.user.id === deletedGroupPost.userId ||
        req.user.id === group.creatorId
      ) {
        const deletedGroupPostLikes = await Group_Post_Like.findAll({
          where: {
            groupPostId: req.params.postId,
          },
        });
        await Group_Post_Like.destroy({
          where: {
            groupPostId: req.params.postId,
          },
        });
        await deletedGroupPost.destroy();
        res.json({ deletedGroupPost, deletedGroupPostLikes });
      } else {
        res
          .status(403)
          .send(
            'Inadequate access rights / Requested user does not match logged-in user'
          );
      }
    } catch (e) {
      console.log('Backend issue deleting post');
      next(e);
    }
  }
);

// get all likes & users who liked a group_post
// must be logged in
router.get(
  '/:groupId/posts/:postId/likes',
  requireToken,
  async (req, res, next) => {
    try {
      const likes = await Group_Post_Like.findAll({
        where: { groupPostId: req.params.postId },
      });

      const userIds = likes.map((like) => like.userId);

      const users = await Promise.all(
        userIds.map((userId) => User.findByPk(userId))
      );
      res.status(200).json({ likes, users });
    } catch (e) {
      console.log('Backend issue fetching all group_post likes');
      next(e);
    }
  }
);

//  like a group post
//  must be logged in -- userId of like automatically set to token user id
router.post(
  '/:groupId/posts/:postId/likes',
  requireToken,
  async (req, res, next) => {
    try {
      const [newGroupPostLike, wasCreated] = await Group_Post_Like.findOrCreate(
        {
          where: {
            groupPostId: req.params.postId,
            userId: req.user.id,
          },
        }
      );
      if (!wasCreated)
        return res.status(409).send('This user already liked this group_post!');
      res.status(201).json(newGroupPostLike);
    } catch (e) {
      console.log('Backend issue adding post_like');
      next(e);
    }
  }
);

//  remove like from group post
//  token user id must match the post creatorId
router.delete('/:postId/likes', requireToken, async (req, res, next) => {
  try {
    const deletedGroupPostLike = await Group_Post_Like.findOne({
      where: { groupPostId: req.params.postId },
    });
    if (!deletedGroupPostLike) {
      return res.status(404).send('That group_post_like does not exist!');
    }
    if (req.user.id === deletedGroupPostLike.userId) {
      await deletedGroupPostLike.destroy();
      res.json(deletedGroupPostLike);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (e) {
    console.log('Backend issue deleting post_like');
    next(e);
  }
});

module.exports = router;
