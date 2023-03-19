const { User } = require('../db');

// requireToken checks token and returns a user
// checks if a token was passed in request headers
// if not, send an 403 forbidden error
// if token passed, calls the verifyByToken hook
// package the returned user (if successful) as "req.user" to be passed into other routes
// calls next to continue to the next call
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(403).send('must be logged in to access!');
    }
    const user = await User.verifyByToken(token);
    req.user = user;
    next();
  } catch (err) {
    console.log('error in requireToken auth middleware', err);
    next(err);
  }
};

// checks a user's role is "sitter"
// if not, returns a 403 forbidden error
// calls next
const isSitter = async (req, res, next) => {
  try {
    if (!req.user.role === 'sitter') {
      return res.status(403).send('inadequate access rights!');
    }
    next();
  } catch (err) {
    console.log('error in isAdmin auth middleware', err);
    next(err);
  }
};

// checks a user's role is "admin"
// if not, returns a 403 forbidden error
// calls next
const isAdmin = async (req, res, next) => {
  try {
    if (!req.user.role === 'admin') {
      return res.status(403).send('inadequate access rights!');
    }
    next();
  } catch (err) {
    console.log('error in isAdmin auth middleware', err);
    next(err);
  }
};

module.exports = { requireToken, isSitter, isAdmin };
