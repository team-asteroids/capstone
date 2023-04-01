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
  imageSrc: {
    type: Sequelize.STRING,
    defaultValue:
      'https://img.freepik.com/free-photo/group-puppies-celebrating-new-year_53876-64798.jpg?w=996&t=st=1680384097~exp=1680384697~hmac=e0683efce9c1e7cf771049ff1629f8211f3981a060087845ba7895e009aec89c',
    allowNull: true,
  },
});

const Event_RSVP = db.define('event_rsvps');

module.exports = { Event, Event_RSVP };

/* 

--event_rsvp
Event.belongsToMany(User, {through: 'event_rsvp'})
User.belongsToMany(Event, {through: 'event_rsvp'})

-- put creator id on table
Event.belongsTo(User)
User.hasMany(Event, {foreignKey: 'eventCreatorId'})
*/
