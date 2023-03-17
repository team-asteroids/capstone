const Sequelize = require('sequelize');
const db = require('../database');

const Sitter_Client = db.define('sitter_client', {
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

module.exports = Sitter_Client;
