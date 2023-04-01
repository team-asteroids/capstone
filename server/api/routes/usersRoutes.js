const router = require('express').Router();
const { User, Pet, Access, Sitter, Sitter_Client } = require('../../db');
const { requireToken } = require('../authMiddleware');

router.use('/:id/posts', require('./postsRoute'));
router.use('/:id/groups', require('./groupsRoute'));
router.use('/:id/bookings', require('./bookingsRoutes'));
router.use('/:id/events', require('./eventsRoutes'));
router.use('/:id/reviews', require('./reviewsRoutes'));
router.use('/:id/ratings', require('./ratingsRoutes'));
router.use('/:id/access', require('./accessRoutes'));
router.use('/:id/pets', require('./petsRoute'));
router.use('/:id/sitters', require('./sittersRoute'));

// Get all users
router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      include: [{ model: Access, attributes: ['zip'] }, Pet],
      attributes: {
        exclude: ['password'],
      },
    });
    res.status(200).json(allUsers);
  } catch (err) {
    console.error('BACKEND ISSUE FETCHING ALL USERS');
    next(err);
  }
});

// Get single user
router.get('/:id', async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(+req.params.id, {
      include: [{ model: Access, attributes: ['zip'] }, Pet, Sitter],
      attributes: {
        exclude: ['password'],
      },
    });
    if (!singleUser) return res.status(404).send('user does not exist');
    res.status(200).json(singleUser);
  } catch (err) {
    console.error('BACKEND ISSUE FETCHING SINGLE USER');
    next(err);
  }
});

// get all user's sitters (including, status)
// router.get('/:id/mysitters', requireToken, async (req, res, next) => {
//   try {
//     const mySitters = await Sitter_Client.findAll({
//       where: { userId: +req.params.id },
//     });

//     console.log(+req.params.id);
//     res.status(200).send(mySitters);

//     // const allSitters = await Promise.all(
//     //   mySitters.map((sitter) => Sitter.findByPk(sitter.sitterId))
//     // );

//     // console.log(allSitters);
//     // const userIdsOfSitters = allSitters.map((sitter) => sitter.userId);

//     // const userDataOfSitters = await Promise.all(
//     //   userIdsOfSitters.map((userId) =>
//     //     User.findByPk(userId, {
//     //       attributes: {
//     //         exclude: ['password'],
//     //       },
//     //     })
//     //   )
//     // );

//     // const sittersAndStatus = await Promise.all(
//     //   allSitters.map((sitter) =>
//     //     Sitter_Client.findOne({
//     //       where: {
//     //         sitterId: sitter.id,
//     //         userId: +req.params.id,
//     //       },
//     //     })
//     //   )
//     // );

//     // const combinedData = [];

//     // allSitters.forEach((sitter) => {
//     //   const userData = userDataOfSitters.find(
//     //     (user) => user.id === sitter.userId
//     //   );
//     //   combinedData.push({
//     //     ...userData.dataValues,
//     //     ...sitter.dataValues,
//     //   });
//     // });

//     // res.status(200).json(combinedData);
//   } catch (err) {
//     console.error('BACKEND ISSUE FETCHING USERS SITTERS');
//     next(err);
//   }
// });

// Get pet details of a user's pets

// Add single user
router.post('/', async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      userName,
      password,
      canFoster,
      totalPets,
    } = req.body;
    const [newUser, wasCreated] = await User.findOrCreate({
      where: { email: req.body.email },
      defaults: {
        firstName,
        lastName,
        email,
        userName,
        password,
        canFoster,
        totalPets,
      },
      attributes: { exclude: ['password'] },
    });
    if (!wasCreated) return res.status(409).send('User already exists');
    res
      .status(201)
      .send({ token: await User.authenticate({ email, password }) });
  } catch (err) {
    console.error('BACKEND ISSUE ADDING NEW USER');
    next(err);
  }
});

// Edit single user
router.put('/:id', requireToken, async (req, res, next) => {
  // if user is trying th change someone else's info and they are NOT an admin, fail w/403
  const id = +req.params.id;

  if (req.user.id !== id && req.user.role !== 'admin') {
    return res
      .status(403)
      .send(
        'inadequate access rights / requested user does not match logged in user'
      );
  }

  try {
    // if user is trying to update user's "role" to admin but they are NOT an admin, fail w/403
    const { role } = req.body;
    if (role === 'admin' && req.user.role !== 'admin') {
      return res
        .status(403)
        .send('inadequate access rights / cannot update role');
    }

    const user = await User.findByPk(id);

    if (!user) return res.status(404).send('No user exists!');
    await user.update(req.body);

    return res.status(200).send(
      await User.findByPk(id, {
        attributes: {
          exclude: ['password'],
        },
      })
    );
  } catch (e) {
    console.error('BACKEND ISSUE UPDATING USER');
    next(e);
  }
});

// update access permission between sitters and clients
router.put(
  '/:id/sitter/:sitterId/access',
  requireToken,
  async (req, res, next) => {
    try {
      const id = +req.params.id;
      const sitterId = +req.params.sitterId;

      if (id === req.user.id || req.user.role === 'admin') {
        const clientStatus = await Sitter_Client.findOne({
          where: {
            userId: id,
            sitterId: sitterId,
          },
        });

        let newStatus;

        if (!clientStatus) {
          newStatus = await Sitter_Client.create({
            status: req.body.status,
            userId: id,
            sitterId: sitterId,
          });
        } else {
          await clientStatus.update({
            status: req.body.status,
          });
        }

        const updatedStatus = await Sitter_Client.findOne({
          where: {
            userId: id,
            sitterId: sitterId,
          },
        });

        return res.status(200).send(updatedStatus);
      } else {
        return res
          .status(403)
          .send(
            'inadequate access rights / requested user does not match logged in user'
          );
      }
    } catch (err) {
      console.error('BACKEND ISSUE UPDATING ACCESS PERMISSIONS');
      next(err);
    }
  }
);

// Delete single user
router.delete('/:id', requireToken, async (req, res, next) => {
  const id = +req.params.id;
  if (req.user.id !== id && req.user.role !== 'admin') {
    return res
      .status(403)
      .send(
        'inadequate access rights / requested user does not match logged in user / cannot delete user'
      );
  }
  try {
    const deletedUser = await User.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
    });
    if (!deletedUser) return res.status(404).send('No user exists!');
    await deletedUser.destroy();
    res.sendStatus(204); // 204 no content (successful delete but not sending anything back)
  } catch (err) {
    console.error('BACKEND ISSUE DELETING USER');
    next(err);
  }
});

// THROUGH TABLE GET ROUTE EXAMPLE
// sitterId > finding all of their clients through the sitter_clients table
// get an array of client objects
// we map over the array to pull out the userids
// gives us an array of userids
// map over that userid array in a promise all to query the User db per userid
// send back an object with clients and users
// router.get('/:id', async (req, res, next) => {
//   try {
//     const clients = await Sitter_Client.findAll({
//       where: {
//         sitterId: +req.params.id,
//       },
//     });

//     const userIds = clients.map((client) => client.userId);

//     const users = await Promise.all(
//       userIds.map((userId) => User.findByPk(userId))
//     );
//     res.status(200).json({ clients, users });
//   } catch (err) {
//     console.log('Backend issue fetching single user');
//     next(err);
//   }
// });

module.exports = router;
