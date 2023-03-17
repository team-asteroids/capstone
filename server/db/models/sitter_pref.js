const Sequelize = require('sequelize');
const db = require('../database');

const Sitter_Pref = db.define('sitter_pref', {
  hostAtHome: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  atOwnerHouse: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  reactive: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  puppies: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  small: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  medium: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  large: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  extraLarge: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  multiplePets: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  cats: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  disabled: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  medication: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

module.exports = Sitter_Pref;
