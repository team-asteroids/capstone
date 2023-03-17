const Sequelize = require('sequelize');
const db = require('../database');

const Access = db.define('access', {
  accessCode: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  emergencyContactName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  emergencyContactPhone: {
    type: Sequelize.BIGINT,
    allowNull: false,
    validate: {
      len: [10],
      notEmpty: true,
      notNull: true,
    },
  },
  wifi: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  additionalNotes: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

module.exports = Access;
