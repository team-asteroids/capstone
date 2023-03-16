const Sequelize = require('sequelize');
const db = require('../database');

// Sitter.hasMany(Booking);
// Booking.belongsTo(Sitter);
// User.hasMany(Booking);
// Booking.belongsTo(User);
// Payment.hasMany(Booking);
// Booking.belongsTo(Payment);
// Pet.belongsToMany(Booking);
// Booking.belongsToMany(Pet);

const Booking = db.define('booking', {
  status: {
    type: Sequelize.ENUM({
      values: ['pending', 'approved', 'cancelled', 'complete'],
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
    },
  },
  rate: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  totalAmount: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0,
      max: 10000,
      notEmpty: true,
      notNull: true,
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
