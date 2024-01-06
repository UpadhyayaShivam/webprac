const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler( async(req,res)=>{
        const {userName , email, password} = req.body;

        if(!userName || !email || !password){
            console.log('Received data:', { userName, email, password });
            console.log("data " ,req.body);
            res.status(400);
            throw new Error("please enter all the feilds");

        }
        const userExists = await User.findOne({email});

        if(userExists){
            throw new Error("User Already Exists");
        }

        const user = await User.create({
            userName,
            email,
            password
        });

        if(user){
            res.status(201).json({
                name: user.userName,
                _id: user._id,
                email: user.email,
                // pics : user.pics,
                token: generateToken(user._id),
            });
        }else{
            throw new Error("failed to create user");
        }
});

module.exports = {
    registerUser,

}