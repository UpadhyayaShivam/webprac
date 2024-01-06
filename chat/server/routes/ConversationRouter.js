const express = require('express');
const { conversationPost, conversationGet } = require('../controller/conversationController');


const ConversationRouter = express.Router();

ConversationRouter.get('/conver ',(req,res)=>{
    res.send(`hello`);
});

ConversationRouter.post('/conversation',conversationPost);
ConversationRouter.get('/conversation/:userId',conversationGet);



module.exports = ConversationRouter;