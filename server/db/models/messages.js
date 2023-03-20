const Sequelize = require('sequelize');
const db = require('../database');

const Chat_Message = db.define('chat_message', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: true,
    },
  },
});

module.exports = Chat_Message;

/* 
-- not sure how to get recepient Id and Sender Id on messages table ??

-- put senderId on Message table
Message.belongsTo(User)
User.hasMany(Message, {foreignKey: 'senderId'})

-- put recepientId on Message table
Message.belongsTo(User)
User.hasMany(Message, {foreignKey: 'recepientId'})

-- message_likes
User.belongsToMany(Message, {through: 'message_like'})
Message.belongsToMany(User, {through: 'message_like'})
*/
