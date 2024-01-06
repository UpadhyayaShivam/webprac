const express = require('express');
const { register } = require('../controller/authController');

const registerRouter = express.Router();

registerRouter.get('/register',register);

module.exports = registerRouter;