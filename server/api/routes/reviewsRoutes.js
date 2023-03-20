const router = require('express').Router({ mergeParams: true });
const { Sitter, Sitter_Review, Booking } = require('../../db');
const { requireToken } = require('../authMiddleware');

// get reviews of specific sitter (public)
router.get('/:id', async (req, res, next) => {
  try {
    // id = sitterId
    const sitterReviews = await Sitter_Review.findAll({
      where: {
        sitterId: req.params.id,
      },
    });

    if (!sitterReviews) {
      return res.status(404).send('no sitter exists');
    }

    res.status(200).send(sitterReviews);
  } catch (err) {
    console.log('BACKED ISSUE FETCHING SINGLE REVIEWS');
    next(err);
  }
});

// create sitter (userId must already exist)
router.post('/', requireToken, async (req, res, next) => {
  try {
    const completeBookings = await Booking.findAll({
      where: { status: 'complete' },
    });

    if (!completeBookings) return res.status(409).send('Nothing to review');

    res.json();
  } catch (e) {
    console.error('BACKEND ISSUE POSTING REVIEW');
    next(e);
  }
});

module.exports = router;
