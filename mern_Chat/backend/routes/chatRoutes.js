const express = require('express');
const { homeRoute, chatsRoute, chatsIdRoute } = require('../controllers/chatController');
const router = express.Router();

router.get('/home', homeRoute);
router.get('/chats', chatsRoute);
router.get('/chats/:id', chatsIdRoute);





module.exports = router;