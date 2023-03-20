const router = require('express').Router({ mergeParams: true });
const { Review, User } = require('../../db');
const { requireToken } = require('../authMiddleware');

// GET all reviews
// /reviews/
// /users/:id/reviews/
router.get('/', requireToken, async (req, res, next) => {
  try {
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
