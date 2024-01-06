
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true,
            trim:true,
            unique:false,
        },
        lastname:{
            type:String,
            trim:true
        },
        email:{
            type:String,
            unique:true,
            required:true,
            trim:true
        },
        display_name:{
            type:String,
            unique:true,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
        },
        profilePicture:{
            type:String,
            default:""
        },
        coverPicture:{
            type:String,
            default:""
        },
        followers:{
            type:Array,
            default:[]
        },
        following:{
            type:Array,
            default:[]
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        desc:{
            type:String,
            max:50
        },
        city:{
            type:String,
            max:50
        },
        gender:{
            type:Number,
            required:true,
            enum:[1,2,3],
            required:true
        }
    },
    {timestamps:true}
);

UserSchema.pre("save", (next) => {
  
    next();
});

module.exports = mongoose.model('User',UserSchema)
