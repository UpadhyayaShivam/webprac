const express = require('express');
const { registerPost, loginPost } = require('../controller/authController');

const registerRouter = express.Router();

// registerRouter.get('/register',(req,res)=>{
//     res.send(`hello`);
// });

registerRouter.post('/register',registerPost);
registerRouter.post('/login',loginPost);


module.exports = registerRouter;