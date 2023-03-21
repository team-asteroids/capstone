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

// POST new access details (for specific user)
// /api/users/:id/access
router.post('/', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    if (!id) {
      return res.status(400).send('must set access data on a specific user');
    }
    if (req.user.id === id || req.user.role === 'admin') {
      const [newAccessData, wasCreated] = await Access.findOrCreate({
        where: { userId: id },
        defaults: req.body,
      });
      if (!wasCreated) {
        return res.status(409).send('Access data already exists');
      }
      res.status(201).send(newAccessData);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.log('BACKED ISSUE ADDING A NEW ACCESS DATA');
    next(err);
  }
});

// PUT edit specific user's access details
// /api/users/:id/access/:accessId

router.put('/:accessId', requireToken, async (req, res, next) => {
  const userId = +req.params.id;
  const id = +req.params.accessId;
  if (req.user.id !== userId && req.user.role !== 'admin') {
    return res
      .status(403)
      .send(
        'inadequate access rights / requested user does not match logged in user'
      );
  }
  try {
    const accessData = await Access.findByPk(id);
    if (!accessData) return res.status(404).send('access data does not exist!');
    await accessData.update(req.body);
    return res.status(200).send(await Access.findByPk(id));
  } catch (err) {
    console.log('BACKED ISSUE UPDATING ACCESS DATA');
    next(err);
  }
});

// DELETE specific user's access details
// /api/users/:id/access/:accessId

module.exports = router;
