const Sequelize = require('sequelize');
const db = require('../database');

const Payment = db.define('payment', {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Payment;
