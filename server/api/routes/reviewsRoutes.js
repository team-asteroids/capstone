const router = require('express').Router({ mergeParams: true });
const { Review, User } = require('../../db');
const { requireToken } = require('../authMiddleware');

// GET all reviews
// /reviews/
// /users/:id/reviews/
router.get('/', requireToken, async (req, res, next) => {});

// GET single review
// /reviews/:reviewId
// /users/:id/reviews/:reviewId
router.get('/', requireToken, async (req, res, next) => {});

// POST new review
// /reviews/
// /users/:id/reviews/
router.post('/', requireToken, async (req, res, next) => {});

// PUT - update existing review
// /reviews/:reviewId
// /users/:id/reviews/:reviewId
router.put('/', requireToken, async (req, res, next) => {});

// DELETE - delete existing review
// /reviews/:reviewId
// /users/:id/reviews/:reviewId
router.delete('/', requireToken, async (req, res, next) => {});

module.exports = router;
