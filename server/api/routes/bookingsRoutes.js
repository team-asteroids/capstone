// can come from USER or SITTER routes (or just straight admin)
const router = require('express').Router({ mergeParams: true });
const { Booking, User, Sitter, Pet, Sitter_Client } = require('../../db');
const { requireToken, isAdmin } = require('../authMiddleware');

// issues: not hitting some error paths

// GET - fetch all bookings (user-specific & admin only)
// /user/:id/bookings/
// /bookings/
router.get('/', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    if (req.user.role === 'admin' && !id) {
      const allBookings = await Booking.findAll({
        include: [
          { model: User, attributes: { exclude: ['password'] } },
          Sitter,
          Pet,
        ],
      });
      if (!allBookings) return res.status(404).send('no bookings!');
      res.status(200).send(allBookings);
    } else if (req.user.id === id || req.user.role === 'admin') {
      const allUserBookings = await Booking.findAll({
        where: {
          userId: id,
        },
        include: [
          { model: User, attributes: { exclude: ['password'] } },
          Sitter,
          Pet,
        ],
      });

      if (!allUserBookings) {
        return res.status(404).send('no user bookings!');
      } else if (allUserBookings) {
        let combinedData = await Promise.all(
          allUserBookings.map(async (userBooking) => {
            const sitterUserId = userBooking.sitter.userId;

            const sitterInfo = await User.findByPk(sitterUserId);

            if (sitterInfo)
              return {
                ...userBooking.dataValues,
                sitterInfo,
              };
          })
        );

        res.status(200).send(combinedData);
      }
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
        Pet,
      ],
    });

    if (
      (req.user.id === id && booking.userId === id) ||
      req.user.role === 'admin'
    ) {
      const sitterUserId = booking.sitter.userId;
      const sitterInfo = await User.findByPk(sitterUserId);

      const sitterClient = await Sitter_Client.findOne({
        where: {
          sitterId: booking.sitter.id,
          userId: id,
        },
      });

      let status;

      if (!sitterClient) {
        status = false;
      } else status = sitterClient.dataValues.status;

      const bookingDetails = {
        ...booking.dataValues,
        sitterInfo,
        status,
      };
      if (!booking) return res.status(404).send('booking does not exist!');
      res.status(200).send(bookingDetails);
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

router.post('/:bookingId/pets', requireToken, async (req, res, next) => {
  try {
    const id = +req.params.id;
    const bookingId = +req.params.bookingId;
    const { pets } = req.body;

    const booking = await Booking.findByPk(bookingId, {
      include: [Pet],
    });

    if (!booking) return res.status(404).send('no booking exists');
    else if (
      (req.user.id === id && booking.userId === id) ||
      req.user.role === 'admin'
    ) {
      await booking.addPets(pets);

      const bookingWithPets = await Booking.findByPk(bookingId, {
        include: [Pet],
      });

      return res.status(201).send(bookingWithPets);
    }
  } catch (err) {
    console.log('BACKED ISSUE ADDING PET TO BOOKING');
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
// ADMIN ONLY
// /bookings/:bookingId
router.delete('/:bookingId', requireToken, isAdmin, async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).send('only admins can delete bookings');
    } else {
      const bookingId = +req.params.bookingId;
      const booking = await Booking.findByPk(bookingId);

      if (!booking) return res.status(404).send('booking does not exist!');
      else {
        await booking.destroy();
        res.status(204).send('admin successfully deleted booking!');
      }
    }
  } catch (err) {
    console.log('BACKED ISSUE DELETING A BOOKING');
    next(err);
  }
});

module.exports = router;
