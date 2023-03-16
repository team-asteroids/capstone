const Sequelize = require('sequelize');
const db = require('../database');

const Sitter_Client = db.define('sitter_client', {
  status: {
    type: Sequelize.ENUM('active', 'inactive'),
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

module.exports = Sitter_Client;
