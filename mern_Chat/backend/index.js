
// imports dependencies
const express = require('express');
const dotenv =  require('dotenv');
const colors = require('colors');
const router = require('./routes/chatRoutes');
const routerUser = require('./routes/userRoutes');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5050;

// middlewares
// app.use(express.json());
// app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// routes
// app.use('/api',router);
app.use('/api',routerUser);



app.listen(PORT, ()=>{

    console.log(`server is running on ${PORT}`.green.bold);
});