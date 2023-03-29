const Sequelize = require('sequelize');
const db = require('../database');

const Booking = db.define('booking', {
  status: {
    type: Sequelize.ENUM({
      values: [
        'pending',
        'withdrawn',
        'approved',
        'declined',
        'cancelled',
        'complete',
      ],
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    }),
  },
  startDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  endDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  totalDays: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
      min: 0,
      max: 100,
    },
  },
  rate: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  totalAmount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
      min: 0,
      max: 10000,
    },
  },
  location: {
    type: Sequelize.ENUM('sitter', 'owner'),
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

module.exports = Booking;
