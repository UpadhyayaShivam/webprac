const express = require('express');
const registerRouter = require('./routes/AuthRouter');
require('dotenv').config();
const colors = require('colors');

// making instance
const app = express();

const PORT  = 5555 || process.env.PORT;

// middlerwares
app.use(express.json());
app.use(express.urlencoded({extended :false}));

app.use('/api', registerRouter);


app.listen(PORT , ()=>{
    console.log(`the server is running on ${PORT}`.italic.blue);
});
