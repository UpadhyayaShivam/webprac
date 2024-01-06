const jwt = require('jsonwebtoken');

const generateToken = (id)=>{
    return jwt.sign({id}, process.env.jwtSecert,{
        expiresIn:"3d"
    });
};

module.exports = generateToken;