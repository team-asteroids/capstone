const Sequelize = require('sequelize');
const db = require('../db');

const Map = db.define('map', {
  lat: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  lng: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

module.exports = Map;
