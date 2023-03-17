const router = require('express').Router();
const { User, Pet } = require('../../db');

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      include: Pet,
    });
    console.log('allUsers:', allUsers);
    res.status(200).json(allUsers);
  } catch (err) {
    console.log('Backend issue fetching all users');
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(+req.params.id, {
      include: Pet,
    });
    res.status(200).json(singleUser);
  } catch (err) {
    console.log('Backend issue fetching single user');
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const [newUser, wasCreated] = await User.findOrCreate({
      where: { email: req.body.email },
      defaults: req.body,
      attributes: { exclude: ['password'] },
    });
    if (!wasCreated) return res.status(409).send('User already exists');
    res.status(201).json(newUser);
  } catch (err) {
    console.error('BACKEND ISSUE ADDING NEW USER');
    next(err);
  }
});

// auth middleware that says can only update if req.params.id === id that comes from the auth middleware (which takes a token)
router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: {
        exclude: ['password'],
      },
    });
    console.log(user);
    if (!user) return res.status(404).send('No user exists!');
    const updatedUser = await user.update(req.body);
    res.json(updatedUser);
  } catch (e) {
    console.error('BACKEND ISSUE UPDATING USER');
    next(e);
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
