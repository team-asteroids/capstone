const Sequelize = require('sequelize');
const db = require('../database');

// Pet.hasOne(Pet_Detail);
// Pet_Detail.belongsTo(Pet);

const Pet_Detail = db.define('pet_detail', {
  about: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  microchipped: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  housetrained: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  spayedOrNeutered: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  reactivity: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  friendlyWithDogs: {
    type: Sequelize.ENUM({
      values: ['yes', 'no', 'unsure', 'depends'],
    }),
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  friendlyWithChildren: {
    type: Sequelize.ENUM({
      values: ['yes', 'no', 'unsure', 'depends'],
    }),
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  friendlyWithCats: {
    type: Sequelize.ENUM({
      values: ['yes', 'no', 'unsure', 'depends'],
    }),
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  energyLevels: {
    type: Sequelize.ENUM({
      values: ['high', 'moderate', 'low'],
    }),
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  feedingSchedule: {
    type: Sequelize.ENUM({
      values: ['morning', 'twice a day', 'custom'],
    }),
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  foodDetails: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  walkSchedule: {
    type: Sequelize.ENUM({
      values: [],
    }),
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  walkDetails: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  medications: {
    type: Sequelize.ENUM({
      values: ['pill', 'topical', 'injection'],
    }),
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  medicationDetails: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  canBeLeftAlone: {
    type: Sequelize.ENUM({
      values: ['<1 hour', '1-4 hours', '4-8 hours', 'custom'],
    }),
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  canBeLeftAloneDetails: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  additionalDetails: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  vetInfo: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Pet_Detail;
