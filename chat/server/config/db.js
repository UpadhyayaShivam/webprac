// const moongose = require('mongoose');
const {  mongoose } = require('mongoose');
const dotenv = require('dotenv');
require('colors');


dotenv.config();

const url = process.env.Mongo_URL || 'mongodb+srv://shivam1723be20:mernchat@mernchat.3fkpuhs.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(
    ()=> console.log(`Connected to database ...`.bgGreen)
).catch((err) => console.log(`error : ${err}`.bgRed));