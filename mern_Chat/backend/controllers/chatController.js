const { json } = require("express");
const chats = require("../data/data");

const homeRoute = (req , res)=>{
    console.log("in home route");
    res.send("hello");
};

const chatsRoute = (req , res)=>{
    console.log("in chat route");
    res.send(chats);
}

const chatsIdRoute = (req,res)=>{
    // console.log("in single chat route");
    // console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id );
        res.send(singleChat);
    // console.log("in home route");

}

module.exports = {
    homeRoute,
    chatsRoute,
    chatsIdRoute,

}