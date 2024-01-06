const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MongoUrl || process.env.mongolocal ,{
            useNewUrlParser : true,
            useUnifiedTopology: true,
        }); 
        console.log(`!!!!Database connect: ${conn.connection.host }`.blue.bold);
        
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold);
    };
};

module.exports = connectDB;