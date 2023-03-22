const Sequelize = require('sequelize');
const db = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const dotenv = require('dotenv').config();

const SECRET = process.env.JWT;
const SALT_ROUNDS = 10;

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      throw new Error('Do not try to set the `fullName` value!');
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
      notNull: true,
    },
  },
  role: {
    type: Sequelize.ENUM({ values: ['user', 'sitter', 'admin'] }),
    defaultValue: 'user',
    validate: {
      notEmpty: true,
    },
  },
  imageSrc: {
    type: Sequelize.STRING,
    defaultValue: 'default-dog.jpg',
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  totalPets: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
      notEmpty: true,
      notNull: true,
    },
  },
  canFoster: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

User.beforeValidate('imageSrc', (user) => {
  if (user.imageSrc === null)
    user.imageSrc = 'http://dummyimage.com/245x100.png/ff4444/ffffff';
});

// encrypts user password
User.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
});

// throws error if password is < 8 chars
User.beforeValidate((user) => {
  const MIN_PASSWORD_LENGTH = 8;

  const pw = user.password;
  if (pw.length < MIN_PASSWORD_LENGTH) {
    const err = new Error();
    err.message = `Minimum password requirement not met (${MIN_PASSWORD_LENGTH} characters)`;
    throw err;
  }
});

// find a user in the db by the unique email
// compares password passed in by user to encrypted password stored in db
// if user exists and passwords match, generates token
// we care about passing back the role because we need it for later auth steps
// if user doesn't exist or password doesn't match, return a 401 (unauthorized) error

User.authenticate = async ({ email, password }) => {
  try {
    const user = await User.findOne({
      where: { email },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      return jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        SECRET
      );
    }
    const error = new Error('bad credentials');
    error.status = 401;
    throw error;
  } catch (err) {
    console.log('authentication error:', err);
  }
};

// takes token from first part of login (auth)
// verifies token corresponds to a real user
// if yes, sends back the user body (excluding password)
// if no, throws a 401 (unauthorized) error
User.verifyByToken = async (token) => {
  try {
    const { id } = jwt.verify(token, SECRET);
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
    });
    if (user) {
      return user;
    } else {
      const error = new Error('bad credentials / bad token');
      error.status = 401;
      throw error;
    }
  } catch (err) {
    console.log('verification error:', err);
  }
};

module.exports = User;
