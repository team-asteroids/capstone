const router = require('express').Router({ mergeParams: true });
const { Sitter_Review, User, Sitter } = require('../../db');
const { requireToken } = require('../authMiddleware');

// GET all reviews
// /reviews/
// /users/:id/reviews/
router.get('/', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    if (req.user.role === 'admin') {
      const allReviews = await Sitter_Review.findAll({
        include: [
          { model: User, attributes: { exclude: ['password'] } },
          Sitter,
        ],
      });
      if (!allReviews) return res.status(404).send('no reviews!');
      res.status(200).send(allReviews);
    } else if (req.user.id === id) {
      const allUserReviews = await Sitter_Review.findAll({
        where: {
          userId: id,
        },
        include: [
          { model: User, attributes: { exclude: ['password'] } },
          Sitter,
        ],
      });
      if (!allUserReviews) {
        return res.status(404).send('no user bookings!');
      } else res.status(200).send(allUserReviews);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.log('BACKEND ISSUE FETCHING ALL REVIEWS');
    next(err);
  }
});

// GET single review
// /reviews/:reviewId
// /users/:id/reviews/:reviewId
router.get('/', requireToken, async (req, res, next) => {
  try {
  } catch (err) {
    console.log('BACKEND ISSUE FETCHING SINGLE REVIEW');
    next(err);
  }
});

// POST new review
// /reviews/
// /users/:id/reviews/
router.post('/', requireToken, async (req, res, next) => {
  try {
  } catch (err) {
    console.log('BACKEND ISSUE ADDING NEW REVIEW');
    next(err);
  }
});

// PUT - update existing review
// /reviews/:reviewId
// /users/:id/reviews/:reviewId
router.put('/', requireToken, async (req, res, next) => {
  try {
  } catch (err) {
    console.log('BACKEND ISSUE UPDATING EXISTING REVIEW');
    next(err);
  }
});

// DELETE - delete existing review
// /reviews/:reviewId
// /users/:id/reviews/:reviewId
router.delete('/', requireToken, async (req, res, next) => {
  try {
  } catch (err) {
    console.log('BACKEND ISSUE DELETING REVIEW');
    next(err);
  }
});

module.exports = router;
