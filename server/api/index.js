const router = require('express').Router();

// routes to specific pages
router.use('/users', require('./routes/usersRoutes'));
router.use('/pets', require('./routes/petsRoute'));
router.use('/sitters', require('./routes/sittersRoute'));
// router.use('/bookings', require('./routes/bookingRoutes'));
// router.use('/events', require('./routes/eventsRoutes'));
// router.use('/posts', require('./routes/postsRoutes'));
// router.use('/groups', require('./routes/groupsRoutes'));
router.use('/auth', require('./routes/authRoutes'));
// router.use('/map', require('./routes/mapRoutes'));
// router.use('/reviews', require('./routes/reviewsRoutes'));
// router.use('/ratings', require('./routes/ratingsRoutes'));

// 404 default error handler
router.use((req, res, next) => {
  const err = new Error('API ROUTE NOT FOUND!');
  err.status = 404;
  next(err);
});

module.exports = router;
