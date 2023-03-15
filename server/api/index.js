const router = require('express').Router();
// entry point into specific routes (router.use)

// routes to specific pages

// 404 default error handler
router.use((req, res, next) => {
  const err = new Error('API ROUTE NOT FOUND!');
  err.status = 404;
  next(err);
});

module.exports = router;
