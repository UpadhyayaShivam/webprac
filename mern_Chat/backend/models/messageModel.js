const mongoose = require('mongoose');


const messageModel = new mongoose.Schema(
    {
        sender:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",

        },
        content:{
            type:String,
            trim:true,
            required:true,
        },
        chat:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Chat",
            
        }

    },
    {
        timestamps:true,

    },

);

const Messages = mongoose.model("Messages", messageModel);

module.exports = Messages;

//  here in message model we want things like 
// chats ki kaha  konsi h ,,
// sender ki kisne behji h ,,
// content kya h 