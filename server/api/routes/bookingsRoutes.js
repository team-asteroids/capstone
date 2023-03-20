// can come from USER or SITTER routes (or just straight admin)
const router = require('express').Router({ mergeParams: true });
const { Booking, User, Sitter, Payment } = require('../../db');
const { requireToken } = require('../authMiddleware');

// issues: not hitting some error paths

// GET - fetch all bookings (user-specific & admin only)
// /user/:id/bookings/
// /bookings/
router.get('/', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    if (req.user.role === 'admin') {
      const allBookings = await Booking.findAll({
        include: [
          { model: User, attributes: { exclude: ['password'] } },
          Sitter,
          Payment,
        ],
      });
      if (!allBookings) return res.status(404).send('no bookings!');
      res.status(200).send(allBookings);
    } else if (req.user.id === id) {
      const allUserBookings = await Booking.findAll({
        where: {
          userId: id,
        },
        include: [
          { model: User, attributes: { exclude: ['password'] } },
          Sitter,
          Payment,
        ],
      });
      if (!allUserBookings) {
        return res.status(404).send('no user bookings!');
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
// /user/:id/bookings/:bookingId
// /bookings/:bookingId
router.get('/:bookingId', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    const bookingId = +req.params.bookingId;
    const booking = await Booking.findByPk(bookingId, {
      include: [
        { model: User, attributes: { exclude: ['password'] } },
        Sitter,
        Payment,
      ],
    });

    if (
      (req.user.id === id && booking.userId === id) ||
      req.user.role === 'admin'
    ) {
      if (!booking) return res.status(404).send('booking does not exist!');
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
// /user/:id/bookings/
// /bookings/
router.post('/', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    if (req.user.id === id || req.user.role === 'admin') {
      const newBooking = await Booking.create(req.body);
      if (!newBooking) return res.status(404).send('error creating bookings!');
      res.status(200).send(newBooking);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.log('BACKED ISSUE ADDING A NEW BOOKING');
    next(err);
  }
});

// PUT - update a booking
// /user/:id/bookings/:bookingId
// /bookings/:bookingId
router.put('/:bookingId', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    const bookingId = +req.params.bookingId;
    const booking = await Booking.findByPk(bookingId);

    if (!booking) return res.status(404).send('booking does not exist!');
    else if (
      (req.user.id === id && booking.userId === id) ||
      req.user.role === 'admin'
    ) {
      const updatedBooking = await booking.update(req.body);
      res.status(200).send(updatedBooking);
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.log('BACKED ISSUE UPDATING A BOOKING');
    next(err);
  }
});

// DELETE - delete a booking
// /user/:id/bookings/:bookingId
// /bookings/:bookingId
router.delete('/:bookingId', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    const bookingId = +req.params.bookingId;
    const booking = await Booking.findByPk(bookingId);

    if (!booking) return res.status(404).send('booking does not exist!');
    else if (
      (req.user.id === id && booking.userId === id) ||
      req.user.role === 'admin'
    ) {
      await booking.destroy();
      res.status(204).send('successfully deleted booking!');
    } else {
      res
        .status(403)
        .send(
          'Inadequate access rights / Requested user does not match logged-in user'
        );
    }
  } catch (err) {
    console.log('BACKED ISSUE DELETING A BOOKING');
    next(err);
  }
});

module.exports = router;
