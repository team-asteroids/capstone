const router = require('express').Router();
const {
  Sitter,
  User,
  Sitter_Client,
  Sitter_Rating,
  Sitter_Pref,
  Sitter_Review,
} = require('../../db');
const { requireToken, isSitter } = require('../authMiddleware');
const sequelize = require('sequelize');

router.use('/:id/reviews', require('./reviewsRoutes'));

// get all sitters with their user info
router.get('/', async (req, res, next) => {
  try {
    // Fetch all sitters
    const allSitters = await Sitter.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    // Get all userIds of sitters
    const userIdsOfSitters = allSitters.map((sitter) => sitter.userId);
    // Fetch all user data of sitters
    const userDataOfSitters = await Promise.all(
      userIdsOfSitters.map((userId) =>
        User.findByPk(userId, {
          attributes: {
            exclude: ['password'],
          },
        })
      )
    );
    // Combine all data into one array
    const combinedData = [];
    allSitters.forEach((sitter) => {
      const userData = userDataOfSitters.find(
        (user) => user.id === sitter.userId
      );
      combinedData.push({
        ...userData.dataValues,
        ...sitter.dataValues,
      });
    });

    res.status(200).json(combinedData);
  } catch (err) {
    console.log('BACKED ISSUE FETCHING SITTERS');
    next(err);
  }
});

// get single sitter and clients and sitter prefs
router.get('/:id', async (req, res, next) => {
  try {
    // Fetch sitter
    const sitter = await Sitter.findByPk(+req.params.id);

    // Fetch all sitter preferences of sitter
    const sitterPrefs = await Sitter_Pref.findAll({
      where: {
        sitterId: +req.params.id,
      },
    });
    // Get all userId of sitter and fetch user data
    const userIdOfSitter = sitter.userId;
    const user = await User.findByPk(userIdOfSitter);

    // Combine sitter and user data
    const sitterAndUser = {
      ...user.dataValues,
      ...sitter.dataValues,
      sitterPrefs,
    };
    // Send back sitter and clients
    res.status(200).json(sitterAndUser);
  } catch (err) {
    console.log('Backend issue fetching single user');
    next(err);
  }
});

// create sitter (userId must already exist)
router.post('/', async (req, res, next) => {
  try {
    const sitter = await Sitter.create(req.body);
    res.json(sitter);
  } catch (e) {
    console.error('BACKEND ISSUE CREATING SITTER');
    next(e);
  }
});

// Edit sitter
router.put('/:id', requireToken, async (req, res, next) => {
  // if user is trying to change someone else's info and they are NOT an admin, fail w/403
  const id = +req.params.id;

  if (req.user.id !== id && req.user.role !== 'admin') {
    return res
      .status(403)
      .send(
        'inadequate access rights / requested user does not match logged in user'
      );
  }

  try {
    const sitter = await Sitter.findByPk(req.params.id, {
      attributes: {
        exclude: ['password'],
      },
    });
    if (!sitter) return res.status(404).send('No sitter exists!');
    const updatedSitter = await sitter.update(req.body);
    res.json(updatedSitter);
  } catch (e) {
    console.error('BACKEND ISSUE UPDATING SITTER');
    next(e);
  }
});

// delete sitter and all associated data
router.delete('/:id', requireToken, async (req, res, next) => {
  const id = +req.params.id; // id = sitterId
  const sitter = await Sitter.findByPk(id);
  if (!sitter) {
    return res.status(404).send('no sitter exists');
  }

  if (sitter.userId !== req.user.id && req.user.role !== 'admin') {
    return res
      .status(403)
      .send(
        'inadequate access rights / requested user does not match logged in user / cannot delete user'
      );
  }

  try {
    // Fetch sitter
    const sitter = await Sitter.findByPk(req.params.id);
    // Fetch all clients of sitter
    const sitterPrefs = await Sitter_Pref.findOne({
      where: {
        sitterId: +req.params.id,
      },
    });
    // Fetch all sitter clients
    const sitterClients = await Sitter_Client.findOne({
      where: {
        sitterId: +req.params.id,
      },
    });
    // Fetch all sitter ratings
    const sitterRatings = await Sitter_Rating.findOne({
      where: {
        sitterId: +req.params.id,
      },
    });
    // Fetch all sitter reviews
    const sitterReviews = await Sitter_Review.findOne({
      where: {
        sitterId: +req.params.id,
      },
    });
    // Destroy all associated data
    if (sitterReviews) await sitterReviews.destroy();
    if (sitterPrefs) await sitterPrefs.destroy();
    if (sitterClients) await sitterClients.destroy();
    if (sitterRatings) await sitterRatings.destroy();
    // Destroy sitter
    await sitter.destroy();
    res.status(204).send('Sitter deleted!');
  } catch (err) {
    console.log('Backend issue deleting sitter');
    next(err);
  }
});

module.exports = router;

/*
    // Fetch sitter ratings data with their average ratings by sitterId, rounded to 2 decimal places
    const sitterRatings = await Sitter_Rating.findAll({
      attributes: [
        'sitterId',
        [sequelize.literal('ROUND(AVG(rating), 2)'), 'averageRating'],
      ],
      group: ['sitterId'],
    });

        // Create a map of sitterId to averageRating
    const ratingMap = {};
    sitterRatings.forEach((rating) => {
      ratingMap[rating.sitterId] = rating.dataValues.averageRating;
    });

    // after (user) => user.id === sitter.userId);
      const sitterRating = ratingMap[sitter.id] || 0;

    // push ..., sitterRating)
      sitterRating,


    // fetch single sitter
        // Fetch all clients of sitter
    const clients = await Sitter_Client.findAll({
      where: {
        sitterId: +req.params.id,
      },
    });

       // Get all userIds of clients and fetch user data
    const userIds = clients.map((client) => client.userId);
    const users = await Promise.all(
      userIds.map((userId) =>
        User.findByPk(userId, {
          attributes: {
            exclude: ['password'],
          },
        })
      )
    );

      const clientsOfSitter = users.map((user) => user.dataValues);
*/
