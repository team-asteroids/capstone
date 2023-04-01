const router = require('express').Router();
const { User, Sitter } = require('../../db');
const { requireToken } = require('../authMiddleware');

// /api/auth
// gets a user obj if token is correct (logged in/ who they say they are)
// must confirm the above before allowing someone to continue with process
// e.g. get to user settings > must attempt token login by calling requireToken middleware before sending back the user obj
router.get('/', requireToken, async (req, res, next) => {
  try {
    if (req.user.role === 'sitter') {
      const userSitter = await Sitter.findOne({
        where: { userId: +req.user.id },
      });
      req.user = { ...req.user.dataValues, userSitter };
      res.send(req.user);
    } else res.send(req.user);
  } catch (err) {
    console.log('backend issue getting user from auth');
    next(err);
  }
});

// /api/auth/login
// path used at login
// takes an email and password submitted by user on login form
// passes those credentials to User.authenticate to generate a token
// if token is returned, we send that token back
// (which can then be stored in local storage and saved in auth slice of redux store)
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await User.authenticate({ email, password });
    if (token) {
      return res.status(200).send({ token });
    } else {
      const error = new Error('bad credentials / bad token');
      error.status = 401;
      throw error;
    }
  } catch (err) {
    console.log('login error:', err);
    next(err);
  }
});

module.exports = router;
