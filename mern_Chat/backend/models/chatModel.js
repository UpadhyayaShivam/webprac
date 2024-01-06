const mongoose = require('mongoose');

const chatModel = new mongoose.Schema(
    {
        chatName:{
            type: String,
            trim: true,
            required: true,
            unique:true,

        },
        isGroupChat:{
            type:Boolean,
            default:false,

        },
        users:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",

        },
        latestChat:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Messages",

        },
        groupAdmin:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",

        },

    },
    {
        timestamps:true,

    },

);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;


// here in chat model we want few things
// chatname , group admin h ya nhi ,,
// group chat h ya nhi , user konsa h
//  and latest massage kya h 