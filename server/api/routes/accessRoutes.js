const router = require('express').Router({ mergeParams: true });
const { User, Access } = require('../../db');
const { requireToken, isAdmin } = require('../authMiddleware');

// MUST BE LOGGED IN AND THE RIGHT USER TO DO ANYTHING HERE

// GET all access details
// /api/users/:id/access
// /api/access (ADMIN ONLY)
router.get('/', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;

    if (req.user.id !== id && req.user.role !== 'admin') {
      return res
        .status(403)
        .send(
          'inadequate access rights / requested user does not match logged in user'
        );
    } else if (req.user.role === 'admin') {
      const allAccessData = await Access.findAll({
        include: [{ model: User, attributes: { exclude: ['password'] } }],
      });
      if (!allAccessData) return res.status(404).send('no access data!');
      res.status(200).send(allAccessData);
    } else if (req.user.id === id) {
      const userAccessData = await Access.findOne({
        where: {
          userId: id,
        },
      });
      if (!userAccessData) return res.status(404).send('no user access data');
      res.status(200).send(userAccessData);
    }
  } catch (err) {
    console.error('BACKEND ISSUE FETCHING ACCESS DATA');
    next(err);
  }
});

// POST new access details
// /api/users/:id/access
// /api/access (ADMIN ONLY)

module.exports = router;
