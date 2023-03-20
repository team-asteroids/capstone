const router = require('express').Router({ mergeParams: true });
const { Sitter_Rating, User, Sitter, Sitter_Client } = require('../../db');
const { requireToken } = require('../authMiddleware');

// ROUTES TO BE USED WITHIN A USER ACCOUNT COMPONENT OR ADMIN
// routes only for logged in users who want to see all their given ratings, a specific rating they gave, submit new, edit existing rating, delete rating

// GET all ratings
// /ratings/ (ADMIN)
// /users/:id/ratings/

router.get('/', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    if (req.user.role === 'admin') {
      const allRatings = await Sitter_Rating.findAll({
        include: [
          { model: User, attributes: { exclude: ['password'] } },
          Sitter,
        ],
      });
      if (!allRatings) return res.status(404).send('no ratings!');
      res.status(200).send(allRatings);
    } else if (req.user.id === id) {
      const allUserRatings = await Sitter_Rating.findAll({
        where: {
          userId: id,
        },
        include: [
          { model: User, attributes: { exclude: ['password'] } },
          Sitter,
        ],
      });
      if (!allUserRatings) {
        return res.status(404).send('no user ratings!');
      } else res.status(200).send(allUserRatings);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.log('BACKEND ISSUE FETCHING ALL RATINGS');
    next(err);
  }
});

// GET single rating
// /ratings/:ratingId (ADMIN)
// /users/:id/ratings/:ratingId
router.get('/:ratingId', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    const ratingId = +req.params.ratingId;
    if (req.user.role === 'admin') {
      const rating = await Sitter_Rating.findByPk(ratingId, {
        include: [
          { model: User, attributes: { exclude: ['password'] } },
          Sitter,
        ],
      });
      if (!rating) return res.status(404).send('no rating!');
      res.status(200).send(rating);
    } else if (req.user.id === id) {
      const userRating = await Sitter_Rating.findByPk(ratingId, {
        where: {
          userId: id,
        },
        include: [
          { model: User, attributes: { exclude: ['password'] } },
          Sitter,
        ],
      });
      if (!userRating) {
        return res.status(404).send('no user rating!');
      } else res.status(200).send(userRating);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.log('BACKEND ISSUE FETCHING SINGLE RATING');
    next(err);
  }
});

// POST new rating
// /ratings/ (ADMIN)
// /users/:id/ratings/
router.post('/', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { sitterId, rating } = req.body;

    // make sure user is a sitterClient
    const isSitterClient = await Sitter_Client.findOne({
      where: { userId: id, sitterId },
    });

    // if not client, cannot leave rating
    if (!isSitterClient && req.user.role !== 'admin') {
      return res.status(403).send('not client of sitter / cannot leave rating');
      // if user is a sitter client && user is who they say they are or an admin, continue
    } else if (req.user.id === id || req.user.role === 'admin') {
      const newSitterRating = await Sitter_Rating.create({
        userId: id,
        sitterId,
        rating,
      });
      if (!newSitterRating) {
        return res.status(404).send('error creating sitter rating!');
      } else return res.status(200).send(newSitterRating);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.log('BACKEND ISSUE ADDING NEW RATING');
    next(err);
  }
});

// PUT - update existing rating
// /ratings/:ratingsId (ADMIN)
// /users/:id/ratings/:ratingsId
router.put('/:ratingId', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    const ratingId = +req.params.ratingId;
    const rating = await Sitter_Rating.findByPk(ratingId);

    if (!rating) return res.status(404).send('rating does not exist!');
    else if (
      (req.user.id === id && rating.userId === id) ||
      req.user.role === 'admin'
    ) {
      const updatedReview = await rating.update(req.body);
      res.status(200).send(updatedReview);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.log('BACKEND ISSUE UPDATING EXISTING RATING');
    next(err);
  }
});

// DELETE - delete existing rating
// /ratings/:ratingId (ADMIN)
// /users/:id/ratings/:ratingId
router.delete('/:ratingId', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    const ratingId = +req.params.ratingId;
    const rating = await Sitter_Rating.findByPk(ratingId);

    if (!rating) return res.status(404).send('rating does not exist!');
    else if (
      (req.user.id === id && rating.userId === id) ||
      req.user.role === 'admin'
    ) {
      await rating.destroy();
      res.status(204).send('successfully deleted rating!');
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.log('BACKEND ISSUE DELETING RATING');
    next(err);
  }
});

module.exports = router;
