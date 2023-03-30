const router = require('express').Router();
const {
  Post,
  Post_Comment,
  User,
  Post_Like,
  Post_Comment_Like,
} = require('../../db');
const { requireToken } = require('../authMiddleware');
const sequelize = require('sequelize');

// helper function
const integrateLikes = async (post) => {
  const likes = await Post_Like.findAll({
    where: { postId: post.id },
  });
  return { post, likes };
};

// get all posts (w/comments)
// public access
router.get('/', async (req, res, next) => {
  try {
    const allPosts = await Post.findAll({
      include: [
        { model: Post_Comment, include: [{ model: User }] },
        { model: User },
      ],
    });

    res.status(200).json(allPosts);
  } catch (e) {
    console.log('Backend issue fetching all posts');
    next(e);
  }
});

// get all likes
router.get('/likes', async (req, res, next) => {
  try {
    const likes = await Post_Like.findAll();

    res.status(200).json(likes);
  } catch (e) {
    console.log('Backend issue fetching all posts');
    next(e);
  }
});

// // get all posts (w/comments & likes)
// // public access
// router.get('/', async (req, res, next) => {
//   try {
//     const allPosts = await Post.findAll({
//       include: [{ model: Post_Comment }],
//     });
//     const postsAndLikes = await Promise.all(
//       allPosts.map((post) => integrateLikes(post))
//     );
//     res.status(200).json(postsAndLikes);
//   } catch (e) {
//     console.log('Backend issue fetching all posts');
//     next(e);
//   }
// });

// get a single post (w/comments & likes)
// must be logged in
router.get('/:postId', requireToken, async (req, res, next) => {
  try {
    const singlePost = await Post.findByPk(req.params.postId, {
      include: [{ model: Post_Comment }],
    });
    const postAndLikes = await integrateLikes(singlePost);
    res.status(200).json(postAndLikes);
  } catch (e) {
    console.log('Backend issue fetching single post');
    next(e);
  }
});

// get a creator's posts
// must be logged in
router.get('/user/:id', requireToken, async (req, res, next) => {
  try {
    const postsBySingleUser = await Post.findAll({
      where: { creatorId: req.params.id },
      include: [{ model: Post_Comment }],
    });
    const postsAndLikes = await Promise.all(
      postsBySingleUser.map((post) => integrateLikes(post))
    );
    res.status(200).json(postsAndLikes);
  } catch (e) {
    console.log("Backend issue fetching a single user's posts");
    next(e);
  }
});

// add a single post
// creatorId is automatically set to token user id
router.post('/', requireToken, async (req, res, next) => {
  try {
    const [newPost, wasCreated] = await Post.findOrCreate({
      where: { content: req.body.content, creatorId: req.user.id },
      defaults: { content: req.body.content, creatorId: req.user.id },
    });
    if (!wasCreated) return res.status(409).send('Post already exists');

    const postWithUser = await Post.findOne({
      where: { content: req.body.content, creatorId: req.user.id },
      include: { model: User },
    });
    res.status(201).json(postWithUser);
  } catch (e) {
    console.log('Backend issue adding single post');
    next(e);
  }
});

// edit a single post
// token user id must match the post creatorId
router.put('/:postId', requireToken, async (req, res, next) => {
  try {
    const singlePost = await Post.findByPk(req.params.postId);
    if (!singlePost) {
      return res.status(404).send('No post exists!');
    }
    if (req.user.id === singlePost.creatorId) {
      const updatedPost = await singlePost.update(req.body);
      res.json(updatedPost);
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

// delete a single post (& comments)
// token user id must match the post creatorId OR you are admin
router.delete('/:postId', requireToken, async (req, res, next) => {
  try {
    const deletedPost = await Post.findByPk(req.params.postId);
    if (!deletedPost) return res.status(404).send('No post exists!');
    if (req.user.id === deletedPost.creatorId || req.user.role === 'admin') {
      await deletedPost.destroy();
      res.json(deletedPost);
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

// _____________________________________________________________

// get all comments on a post -- delete for now bc pos no use case??
// must be logged in
router.get('/:postId/comments', requireToken, async (req, res, next) => {
  try {
    const allPostComments = await Post_Comment.findAll({
      where: { postId: req.params.postId },
      //include User info:
      include: [{ model: User }],
    });
    res.status(200).json(allPostComments);
  } catch (e) {
    console.log('Backend issue fetching all comments');
    next(e);
  }
});

// add post comment
// must be logged in -- userId of comment automatically set to token user id
router.post('/:postId/comments', requireToken, async (req, res, next) => {
  try {
    const [newPostComment, wasCreated] = await Post_Comment.findOrCreate({
      where: {
        content: req.body.content,
        userId: req.user.id,
        postId: req.params.postId,
      },
    });
    if (!wasCreated) return res.status(409).send('Post_Comment already exists');
    res.status(201).json(newPostComment);
  } catch (e) {
    console.log('Backend issue adding post_comment');
    next(e);
  }
});

// edit post comment
// token user id must match the post creatorId
router.put(
  '/:postId/comments/:commentId',
  requireToken,
  async (req, res, next) => {
    try {
      const postComment = await Post_Comment.findOne({
        where: {
          id: req.params.commentId,
          postId: req.params.postId,
        },
      });
      if (!postComment) {
        return res.status(404).send('That post_comment does not exist!');
      }
      if (req.user.id === postComment.userId) {
        const updatedPost = await postComment.update(req.body);
        res.json(updatedPost);
      } else {
        res
          .status(403)
          .send(
            'Inadequate access rights / Requested user does not match logged-in user'
          );
      }
    } catch (e) {
      console.error('Backend issue editing a post_comment');
      next(e);
    }
  }
);

// delete post comment
// token user id must match the post creatorId OR you are admin
router.delete(
  '/:postId/comments/:commentId',
  requireToken,
  async (req, res, next) => {
    try {
      const deletedPostComment = await Post_Comment.findOne({
        where: { id: req.params.commentId, postId: req.params.postId },
      });
      if (!deletedPostComment)
        return res.status(404).send('That post_comment does not exist!');
      if (
        req.user.id === deletedPostComment.userId ||
        req.user.role === 'admin'
      ) {
        await deletedPostComment.destroy();
        res.json(deletedPostComment);
      } else {
        res
          .status(403)
          .send(
            'Inadequate access rights / Requested user does not match logged-in user'
          );
      }
    } catch (e) {
      console.log('Backend issue deleting post_comment');
      next(e);
    }
  }
);

// _____________________________________________________________

// // get all likes &/ users who liked single post -- maybe delete bc pos no use case??
// router.get('/:postId/likes', requireToken, async (req, res, next) => {
//   try {
//     const likes = await Post_Like.findAll({
//       where: { postId: req.params.postId },
//     });

//     const userIds = likes.map((like) => like.userId);

//     const users = await Promise.all(
//       userIds.map((userId) => User.findByPk(userId))
//     );
//     res.status(200).json({ likes, users });
//   } catch (e) {
//     console.log('Backend issue fetching all post likes');
//     next(e);
//   }
// });

//  like a post
//  must be logged in -- userId of like automatically set to token user id
router.post('/:postId/likes', requireToken, async (req, res, next) => {
  try {
    const [newPostLike, wasCreated] = await Post_Like.findOrCreate({
      where: {
        postId: req.params.postId,
        userId: req.user.id,
      },
    });
    if (!wasCreated)
      return res.status(409).send('This user already liked this post!');
    res.status(201).json(newPostLike);
  } catch (e) {
    console.log('Backend issue adding post_like');
    next(e);
  }
});

//  remove like from post
//  token user id must match the post creatorId
router.delete('/:postId/likes', requireToken, async (req, res, next) => {
  try {
    const deletedPostLike = await Post_Like.findOne({
      where: { postId: req.params.postId, userId: req.user.id },
    });
    if (!deletedPostLike) {
      return res.status(404).send('That post_like does not exist!');
    }
    if (req.user.id === deletedPostLike.userId) {
      await deletedPostLike.destroy();
      res.json(deletedPostLike);
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

// _____________________________________________________________

// get all likes & users who liked  -- per post_comment
// must be logged in
router.get(
  '/:postId/comments/:commentId/likes',
  requireToken,
  async (req, res, next) => {
    try {
      const likes = await Post_Comment_Like.findAll({
        where: { postCommentId: req.params.commentId },
      });

      const userIds = likes.map((like) => like.userId);

      const users = await Promise.all(
        userIds.map((userId) => User.findByPk(userId))
      );
      res.status(200).json({ likes, users });
    } catch (e) {
      console.log('Backend issue fetching all post-comment likes');
      next(e);
    }
  }
);

// like a post-comment
// must be logged in -- userId of like automatically set to token user id
router.post(
  '/:postId/comments/:commentId/likes',
  requireToken,
  async (req, res, next) => {
    try {
      const [newPostCommentLike, wasCreated] =
        await Post_Comment_Like.findOrCreate({
          where: {
            postCommentId: req.params.commentId,
            userId: req.user.id,
          },
        });
      if (!wasCreated)
        return res
          .status(409)
          .send('This user already liked this post comment!');
      res.status(201).json(newPostCommentLike);
    } catch (e) {
      console.log('Backend issue adding post_comment_like');
      next(e);
    }
  }
);

//  remove like from post-comment
//  token user id must match the post creatorId OR you are admin
router.delete('/:postId/comments/:commentId/likes', async (req, res, next) => {
  try {
    const deletedPostCommentLike = await Post_Comment_Like.findOne({
      where: { postCommentId: req.body.postCommentId },
    });
    if (!deletedPostCommentLike) {
      return res.status(404).send('That post_comment_like does not exist!');
    }
    if (
      req.user.id === deletedPostCommentLike.userId ||
      req.user.role === 'admin'
    ) {
      await deletedPostCommentLike.destroy();
      res.json(deletedPostCommentLike);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (e) {
    console.log('Backend issue deleting post_comment_like');
    next(e);
  }
});

router.post('/search', async (req, res, next) => {
  try {
    const content = req.body.params.content;
    const searchedPosts = await Post.findAll({
      where: {
        content: {
          [sequelize.Op.iLike]: `%${content}%`,
        },
      },

      include: [{ model: Post_Comment }, { model: User }],
    });
    res.status(200).json(searchedPosts);
  } catch (error) {
    console.log('Backend issue searching posts');
    next(error);
  }
});

module.exports = router;
