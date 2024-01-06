const express = require('express');
const registerRouter = require('./routes/AuthRouter');
const ConversationRouter = require('./routes/ConversationRouter');
const cors = require('cors');
require('dotenv').config();
const colors = require('colors');
const { messagePost } = require('./controller/messageController');
const MessageRouter = require('./routes/messageRoute');
const UserRouter = require('./routes/userFetchRoute');
require('./config/db');



// making instance
const app = express();

const PORT  = 5555 || process.env.PORT;

// middlerwares
app.use(express.json());
app.use(express.urlencoded({extended :false}));
app.use(cors());

app.use('/api', registerRouter);
app.use('/api', ConversationRouter);
app.use('/api', MessageRouter);
app.use('/api', UserRouter);





app.listen(PORT , ()=>{
    console.log(`the server is running on ${PORT}`.italic.blue);
});
