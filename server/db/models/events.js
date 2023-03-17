const Sequelize = require('sequelize');
const db = require('../database');

const Event = db.define('event', {
  zip_code: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
      len: [5],
    },
  },
  event_start: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  event_end: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  topic: {
    type: Sequelize.STRING,
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
});

module.exports = Event;

/* 

--event_rsvp
Event.belongsToMany(User, {through: 'event_rsvp'})
User.belongsToMany(Event, {through: 'event_rsvp'})

-- put creator id on table
Event.belongsTo(User)
User.hasMany(Event, {foreignKey: 'eventCreatorId'})
*/
