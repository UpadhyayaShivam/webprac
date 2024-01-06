const express = require('express');
const { userGet } = require('../controller/userFetchController');


const UserRouter = express.Router();


UserRouter.get('/users',userGet);




module.exports = UserRouter;