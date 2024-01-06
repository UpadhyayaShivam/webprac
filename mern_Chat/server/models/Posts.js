const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true
        },
        postImage:{
            type:String,
            default:""
        },
        description:{
            type:String,
            default:""
        },
        likes:{
            type:Array,
            default:[]
        },
        comments:{
            type:Array,
            default:[]
        }

    },
    {timestamps:true}
);

module.exports = mongoose.model('Post',PostSchema)