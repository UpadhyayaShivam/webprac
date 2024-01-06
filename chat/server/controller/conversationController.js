const express = require('express');
const Conversation = require('../models/conversation');
const { Users } = require('../models/users');

const conversationPost = async(req,res)=>{
    try {
        
        const {senderId , reciverId} = req.body;
        const NewConversation = new Conversation({members: [senderId , reciverId]});
        await NewConversation.save();
        res.status(200).send('conversation is created ...');


    } catch (error) {
        console.log(`errr - ${error}`.bgRed);
    }
};

 const conversationGet = async(req,res)=>{
    try {
        // console.log('het1');
        const userId = req.params.userId;
        const conversations = await Conversation.find({members: {$in : [userId]}});
        // console.log('het2');
        const conversationUserData = Promise.all(conversations.map(async (conversation)=>{
                const reciverId =conversation.members.find((member)=> member !== userId);
                const user = await Users.findById(reciverId);
                return { user: {reciverId: user._id, email:user.email, fullName: user.fullName} , conversationId: conversation._id}
        }));
        // res.status(200).json(conversations);
        res.status(200).json(await conversationUserData);


    } catch (error) {
        // console.log('het3');
        console.log(`errr - ${error}`.bgRed);
    }
 }

module.exports = {
    conversationPost,
    conversationGet,
}