const router = require('express').Router();

// routes to specific pages
router.use('/users', require('./routes/usersRoutes'));
router.use('/pets', require('./routes/petsRoute'));
router.use('/sitters', require('./routes/sitters'));
// // reviews and ratings under sitters
// router.use('/bookings', require('./routes/booking'));
// router.use('/events', require('./routes/events'));
// router.use('/posts', require('./routes/posts'));
// router.use('/groups', require('./routes/groups'));
router.use('/auth', require('./routes/authRoutes'));
// router.use('/map', require('./routes/map'));

// 404 default error handler
router.use((req, res, next) => {
  const err = new Error('API ROUTE NOT FOUND!');
  err.status = 404;
  next(err);
});

module.exports = router;
