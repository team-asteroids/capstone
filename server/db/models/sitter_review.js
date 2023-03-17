const Sequelize = require('sequelize');
const db = require('../database');

const Sitter_Review = db.define('sitter_review', {
  context: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

module.exports = Sitter_Review;
