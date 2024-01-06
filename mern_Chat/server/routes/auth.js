const router = require("express").Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');

router.post("/register", async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            display_name : req.body.display_name,
            email : req.body.email,
            password : hashedPassword,
            gender : req.body.gender
        })
        const user = await newUser.save();
        res.status(200).json(newUser); // 200 - successfull
    }catch(error){
        res.send(error);
        console.log(error)
    }
})

router.get("/login", async(req,res)=>{
    try{

        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).send("User not found");
        if(user){
            const validPassword = await bcrypt.compare(req.body.password,user.password);
            !validPassword && res.send("Invalid password");
        }
        user && validPassword && res.send("Login Successful!")

    }catch(error){
        console.log(error);  
    }
})


module.exports = router;