const router = require('express').Router();
const {
  Group,
  Group_Post,
  Group_Member,
  Group_Post_Like,
  User,
} = require('../../db');

// get all groups
router.get('/', async (req, res, next) => {
  try {
    const allGroups = await Group.findAll();
    res.status(200).json(allGroups);
  } catch (e) {
    console.log('Backend issue fetching all groups');
    next(e);
  }
});

// get all groups per member

router.get('/user/:userId', async (req, res, next) => {
  try {
    const memberships = await Group_Member.findAll({
      where: { userId: req.params.userId },
    });

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

// get single group (inc. posts, post_likes, members)
router.get('/:id', async (req, res, next) => {
  try {
    const singleGroup = await Group.findByPk(req.params.id, {
      include: [{ model: Group_Post }],
    });

    const memberships = await Group_Member.findAll({
      where: { groupId: req.params.id },
    });
    const memberIds = memberships.map((mem) => mem.userId);

    const members = await Promise.all(memberIds.map((id) => User.findByPk(id)));

    res.status(200).json({ singleGroup, members });
  } catch (e) {
    console.log('Backend issue fetching single group');
    next(e);
  }
});

// edit single group

// delete group

// get all members per group
router.get('/:id/members', async (req, res, next) => {
  try {
    const memberships = await Group_Member.findAll({
      where: { groupId: req.params.id },
    });
    const memberIds = memberships.map((mem) => mem.userId);

    const members = await Promise.all(memberIds.map((id) => User.findByPk(id)));
    res.status(200).json(members);
  } catch (e) {
    console.log('Backend issue fetching single group');
    next(e);
  }
});

// delete group member

// edit group post

// delete group post

// like group post

// remove like from post

module.exports = router;
