// can come from USER or SITTER routes (or just straight admin)
const router = require('express').Router({ mergeParams: true });
const { Booking, User, Pet, Sitter, Payment } = require('../../db');
const { requireToken } = require('../authMiddleware');

// GET - fetch all bookings (user-specific & admin only)
// /user/:id/bookings/
// /sitter/:id/bookings/
// /bookings/
router.get('/', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    if (req.user.role === 'admin') {
      const allBookings = await Booking.findAll({
        include: [User, Sitter, Payment],
      });
      if (!allBookings) return res.status(204).send('no bookings!');
      res.status(200).send(allBookings);
    } else if (req.user.id === id) {
      const allUserBookings = await Booking.findAll({
        where: {
          userId: id,
        },
        include: [User, Sitter, Payment],
      });
      if (!allUserBookings) {
        return res.status(204).send('no user bookings!');
      } else res.status(200).send(allUserBookings);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.log('BACKED ISSUE FETCHING BOOKINGS');
    next(err);
  }
});

// GET - fetch a specific booking
// /user/:id/bookings/:id
// /sitter/:id/bookings/:id
// /bookings/:id
router.get('/:bookingId', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    const bookingId = +req.params.bookingId;
    const booking = await Booking.findByPk(bookingId, {
      include: [User, Sitter, Payment],
    });

    if (
      (req.user.id === id && booking.userId === id) ||
      req.user.role === 'admin'
    ) {
      if (!booking) return res.status(204).send('booking does not exist!');
      res.status(200).send(booking);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.log('BACKED ISSUE FETCHING SINGLE BOOKING');
    next(err);
  }
});

// POST - add a new booking
router.post('/', async (req, res, next) => {
  try {
  } catch (err) {
    console.log('BACKED ISSUE ADDING A NEW BOOKING');
    next(err);
  }
});

// PUT - update a booking
router.put('/:id', async (req, res, next) => {
  try {
  } catch (err) {
    console.log('BACKED ISSUE UPDATING A BOOKING');
    next(err);
  }
});

// DELETE - delete a booking
router.delete('/:id', async (req, res, next) => {
  try {
  } catch (err) {
    console.log('BACKED ISSUE DELETING A BOOKING');
    next(err);
  }
});

module.exports = router;
