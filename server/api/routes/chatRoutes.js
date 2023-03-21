const router = require('express').Router();
const { Chat, Chat_Message } = require('../../db');
const { requireToken } = require('../authMiddleware');
const { Op } = require('sequelize');

// this gets all chats
router.get('/', requireToken, async (req, res, next) => {
  try {
    const allChats = await Chat.findAll({
      include: [{ model: Chat_Message }],
    });
    if (req.user.role !== 'admin') return res.send('Inadequate access rights');
    else {
      res.status(200).json(allChats);
    }
  } catch (error) {
    console.log('Backend issue fetching all chats');
    next(error);
  }
});

// this gets ALL chats that a user belongs to
router.get('/my-chats', requireToken, async (req, res, next) => {
  try {
    const myChats = await Chat.findAll({
      include: [{ model: Chat_Message }],
      where: {
        [Op.or]: [{ user1: req.user.id }, { user2: req.user.id }],
      },
    });
    res.status(200).json(myChats);
  } catch (error) {
    console.log("Backend issue fetching user's chat");
    next(error);
  }
});

// this allows a user to create a new chat only if it does not already exist
router.post('/', requireToken, async (req, res, next) => {
  try {
    const allChats = await Chat.findAll();
    const chatExists = allChats.filter((chat) => {
      if (
        (chat.user1 === req.body.user1 || chat.user1 === req.body.user2) &&
        (chat.user2 === req.body.user1 || chat.user2 === req.body.user2)
      )
        return chat;
    });
    if (chatExists.length) return res.send('Chat already exists');
    res.status(201).json(await Chat.create(req.body));
  } catch (error) {
    console.log('Backend issue creating a new chat');
    next(error);
  }
});

// this allows a user to add a message in a chat
router.post('/:chatId', requireToken, async (req, res, next) => {
  try {
    // find chat messages where chatId = req.params.chatId
    const newMessage = await Chat_Message.create({
      content: req.body.content,
      chatId: req.params.chatId,
      userId: req.user.id,
      recipientId: req.body.recipientId,
      read: false,
    });
    res.status(201).json(newMessage);
  } catch (error) {
    console.log('Backend issue adding a new message to chat');
    next(error);
  }
});

module.exports = router;
