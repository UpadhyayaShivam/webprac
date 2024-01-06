const express = require('express');
const { homeRoute, chatsRoute, chatsIdRoute } = require('../controllers/chatController');
const routerUser = express.Router();
const {registerUser} = require('../controllers/userController');
const asyncHandler = require('express-async-handler');

routerUser.post('/', asyncHandler(registerUser));

 
// routerUser.post('/register', registerUser);





module.exports = routerUser;