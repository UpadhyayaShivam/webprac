const express = require('express');
const { Message } = require('../models/messages');
const { Users } = require('../models/users');

const userGet = async(req,res)=>{
    try {
        const users = await Users.find();
        const usersData =Promise.all(users.map(async (user) => {
            return {user: {email:user.email , fullName: user.fullName} , userId: user._id}
        }))
        res.status(200).json(await usersData);

    } catch (error) {
        console.log(`errr - ${error}`.bgRed);
    }
};


module.exports = {
    userGet,

}