// importing 
const express = require('express');
const cors = require('cors');
require('colors');

require('dotenv').config();



const PORT = 6969 || process.env.PORT;

// creating instance 
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());




app.listen(PORT,()=>{
    try {
        console.log(`server is running on ${PORT}`.italic.bgBlue.grey);
    } catch (err) {
        console.error(`error : ${err}`.bgRed);
    }
})
