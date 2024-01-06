const mongoose =  require('mongoose');

const userModel = new mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            

        },
        email:{
            type:String,
            unique:true,

        },
        password:{
            type:String,
            trim:true,
            required:true,

        },
        // pics:{
        //     type:String,
        //     default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fmale-profile-icon-white-on-the-blue-background-gm470100848-62291814&psig=AOvVaw3HAMvToP6cKwvgb8a-hSsV&ust=1696305888460000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjVjoW-1oEDFQAAAAAdAAAAABAD",

        // },

    },
    {
        timestamps:true,

    },

);

const User = mongoose.model("User",userModel);

module.exports = User;