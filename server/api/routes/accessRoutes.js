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
    } else if (req.user.role === 'admin' && !id) {
      const allAccessData = await Access.findAll({
        include: [{ model: User, attributes: { exclude: ['password'] } }],
      });
      if (!allAccessData) return res.status(404).send('no access data!');
      res.status(200).send(allAccessData);
    } else if (req.user.id === id || req.user.role === 'admin') {
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
router.get('/:accessId', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    const accessId = +req.params.accessId;
    const accessData = await Access.findByPk(accessId, {
      where: {
        userId: id,
      },
    });

    if (
      (req.user.id === id && accessData.userId === id) ||
      req.user.role === 'admin'
    ) {
      if (!accessData) return res.status(404).send('booking does not exist!');
      res.status(200).send(accessData);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
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
// ADMIN ONLY
// /api/users/:id/access/:accessId
// /api/access/:accessId
router.delete('/:accessId', requireToken, isAdmin, async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).send('only admins can delete this data');
    } else {
      const accessId = +req.params.accessId;
      const accessData = await Access.findByPk(accessId);

      if (!accessData)
        return res.status(404).send('access data does not exist!');
      else {
        await accessData.destroy();
        res.status(204).send('admin successfully deleted booking!');
      }
    }
  } catch (err) {
    console.log('BACKED ISSUE DELETING USER ACCESS DATA');
    next(err);
  }
});

module.exports = router;
