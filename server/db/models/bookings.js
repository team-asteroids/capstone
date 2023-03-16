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
    type: Sequelize.VIRTUAL,
    get() {
      return this.endDate - this.startDate;
    },
    set(value) {
      return 'do not try to set this field';
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
    type: Sequelize.VIRTUAL,
    get() {
      return this.totalDays * this.rate;
    },
    set(value) {
      return 'do not try to set this field';
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
