const Sequelize = require('sequelize');
const db = require('../database');

const Chat = db.define('chat', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
});

// add hook to make sure the combination of user1 and user2 is unique aka only appears once on the table

module.exports = Chat;
