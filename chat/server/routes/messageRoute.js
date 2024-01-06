const express = require('express');
const { messagePost, messageGet } = require('../controller/messageController');


const MessageRouter = express.Router();

// MessageRouter.get('/',(req,res)=>{
//     res.send(`hello`);
// });

MessageRouter.post('/message',messagePost);
MessageRouter.get('/message/:conversationId',messageGet);




module.exports = MessageRouter;