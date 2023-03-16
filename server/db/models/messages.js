const Sequelize = require('sequelize');
const db = require('../database');

const Message = db.define('message', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

module.exports = Message;

/* 
-- not sure how to get recepient Id and Sender Id on messages table..

User.belongsToMany(User, {through: Message})
User.belongsToMany(User, {through: Message})
*/
