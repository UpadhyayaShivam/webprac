const express = require('express');
const { Message } = require('../models/messages');
const { Users } = require('../models/users');
const Conversation = require('../models/conversation');

const messagePost = async(req,res)=>{
    try {
        const {conversationId,senderId , message, reciverId=''} = req.body;
        if(!conversationId && reciverId){
            const newConversation = new Conversation({ members: [senderId , reciverId]});
            await newConversation.save();
            const newMessage = new Message({conversationId: newConversation._id ,senderId, message});
            await newMessage.save();
            return res.status(200).send(`message sengt succesfully..`);
        }else{
            return res.status(400).send('plz fill all the requirements....')
        }
        const newMessage = new Message({conversationId ,senderId, message});
        await newMessage.save();
        res.status(200).send('message sent succesfully');

        

    } catch (error) {
        console.log(`errr - ${error}`.bgRed);
    }
};

const messageGet = async(req,res)=>{
    try {
        // console.log('het1');
        const conversationId = req.params.conversationId;
        if(conversationId === 'new') { return res.status(200).json([]);};
        const messages = await Message.find({conversationId});
       
        // res.status(200).json(message);
        const messageUserData = Promise.all(messages.map(async (message)=>{
            const user = await Users.findById(message.senderId);
            return { user: {id : user._id, email:user.email, fullName: user.fullName} , message: message.message}
    }));
    // res.status(200).json(conversations);
    res.status(200).json(await messageUserData);


    } catch (error) {
        // console.log('het3');
        console.log(`errr - ${error}`.bgRed);
    }
 }


module.exports = {
    messagePost,
    messageGet,
}