const Sequelize = require('sequelize');
const db = require('../database');

const Sitter = db.define('sitter', {
  rate: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  calendar: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
      notNull: true,
      notEmpty: true,
    },
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
});

module.exports = Sitter;
