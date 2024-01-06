const express = require('express');
const { Users } = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const registerPost = async(req,res) =>{
    console.log('het 1');
        // res.send("register");
        try {
            const {fullName , email , password} = req.body;

            if(!fullName || !email || !password){
                console.log('hit 2');
                res.status(400).send(`plz fill all the input feilds`.bgRed);
            }else{
                const AlreadyExists = await Users.findOne({email});
                console.log('hit 3');

                if(AlreadyExists){
                console.log('hit 4');
                    res.status(400).send(`user already exists.....`.bgRed);
                }else{
                console.log('hit 5');
                    // const newUser = new Users({fullName, email , password: hashedpassword});
                    // bcrypt.hash(password , 10 , (err , hashedpassword)=>{
                    //     newUser.set('password',hashedpassword);
                    //     newUser.save();
                    //     next();
                    // })
                    const hashedPassword = await bcrypt.hash(password, 10); // Hashing the password
                    const newUser = new Users({ fullName, email, password: hashedPassword }); 
                    await newUser.save();
                    return res.status(200).send('user registered successfully ..'.bgGreen);
                }


            }


        } catch (error) {
                console.error(error);
                return res.status(500).send('Internal Server Error'.bgRed);
        }
};



const loginPost = async(req,res) =>{
    console.log('het 1');
        // res.send("register");
        try {
            const {email , password} = req.body;

            if(!email || !password){
                console.log('hit 2');
                res.status(400).send(`plz fill all the input feilds`.bgRed);
            }else{
                const user = await Users.findOne({email});
                console.log('hit 3');

                if(!user){
                    console.log('hit 4');
                    res.status(400).send(`email is incorrect .....`.bgRed);
                }else{
                    console.log('hit 5');
                    const validateUser  = await bcrypt.compare(password , user.password);
                    if(!validateUser){
                        res.status(400).send(`password is incorrect ...`);
                    }else{
                        const payload = {
                            userId: user._id,
                            email: user.email,
                        }
                        const JWT_SECRET_KEY =process.env.JWT_SECRET_KEY || 'chatWorkProject';

                        jwt.sign(payload,JWT_SECRET_KEY, {expiresIn : 84600} , async (err,token)=>{
                            await Users.updateOne(
                                {_id : user._id},
                                {
                                    $set: { token},
                                }
                            )
                            user.save();
                            
                        })
                        return res.status(200).json({user: {id: user._id , email: user.email , fullName: user.fullName} , token : user.token});
                    }
                }
            }
        } catch (error) {
            console.log(`err: ${error}`.bgRed);
        }
};

module.exports = {
    registerPost,
    loginPost,
};
