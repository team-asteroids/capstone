const Sequelize = require('sequelize');
const db = require('../database');

const Sitter_Rating = db.define('sitter_rating', {
  rating: {
    type: Sequelize.INTEGER,
    min: 1,
    max: 5,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

module.exports = Sitter_Rating;
