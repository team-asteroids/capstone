const router = require('express').Router();

// routes to specific pages
router.use('/users', require('./routes/usersRoutes'));
router.use('/pets', require('./routes/petsRoute'));
router.use('/sitters', require('./routes/sittersRoute'));
router.use('/events', require('./routes/eventsRoutes'));
router.use('/posts', require('./routes/postsRoute'));
router.use('/groups', require('./routes/groupsRoute'));
router.use('/bookings', require('./routes/bookingsRoutes'));
router.use('/auth', require('./routes/authRoutes'));
router.use('/reviews', require('./routes/reviewsRoutes'));
router.use('/ratings', require('./routes/ratingsRoutes'));
// router.use('/map', require('./routes/mapRoutes'));
router.use('/chat', require('./routes/chatRoutes'));
router.use('/access', require('./routes/accessRoutes'));

// 404 default error handler
router.use((req, res, next) => {
  const err = new Error('API ROUTE NOT FOUND!');
  err.status = 404;
  next(err);
});

module.exports = router;
