const Sequelize = require('sequelize');
const db = require('../database');

const Access = db.define('access', {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Access;
