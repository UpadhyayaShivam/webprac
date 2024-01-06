const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const userRoute = require('./routes/users.js');
const authRoute = require('./routes/auth.js');
const postRoute = require('./routes/post.js');

require('colors');

const app = express();
app.use(express.json());

dotenv.config();

async function ConnectMongoDB(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log("MongoDB Connected!".bgBlue.grey)
    }catch(error){
        console.log("MongoDB Connection Failed!")
    }
}
ConnectMongoDB();

const PORT = process.env.PORT || 8000;

app.use("/auth",authRoute);
app.use("/users",userRoute);
app.use("/post",postRoute);

app.get("/getname",(req,res)=>{
        res.send('The name is John Wick!'.blue)
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} `.italic.bgMagenta)
})