const Sequelize = require('sequelize');
const db = require('../database');

const Event = db.define('event', {
  zip_code: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
  event_time: {
    type: Sequelize.TIME,
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
