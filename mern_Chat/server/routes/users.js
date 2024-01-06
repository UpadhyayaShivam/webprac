const User = require('../models/User');
const bcrypt = require('bcrypt')
const router = require('express').Router();

// UPDATE 

router.put("/update/:id", async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        !user && res.send("User ID not found.")
        if(user && user.isAdmin){
            const validPassword = await bcrypt.compare(req.body.password,user.password);
            !validPassword && res.send("Invalid Password");
            if(validPassword){
                try{
                    const salt = await bcrypt.genSalt(10);
                    req.body.password = await bcrypt.hash(req.body.newPassword,salt);
                }catch(error){
                    console.log(error);
                }
                try{
                    await User.findByIdAndUpdate(req.params.id,{$set:req.body});
                    res.status(200).send("Account has been updated!");
                }catch(error){
                    console.log(error);
                }
            }
            
        }
    }catch(error){
        res.send("Id not valid!")
        console.log(error);
    }
})

// DELETE

router.delete("/delete/:id",async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(user){
            if(user.isAdmin){const targetUser = await User.findById(req.body.targetUserId);
            !targetUser && res.send("Target user not found.");
            if(targetUser){
                try{
                    const isDeleted = await User.findByIdAndDelete(req.body.targetUserId);
                    !isDeleted && res.send("Couldn't delete user.");
                    if(isDeleted){res.send("User account deleted!");}
                }catch(error){
                    console.log(error);
                }
            }}else{
                res.send("You can only delete your Account.");
            }
        }else{
            !user && res.send("Admin Id not found");
        }
    }catch(error){
        console.log(error);
    }
})

// GET USER 

router.get("/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password,updatedAt,...other} = user._doc;
        res.status(200).send(other);
    }catch(error){
        res.status(500).send(error);
        console.log(error);
    }
})

// FOLLOW

router.post("/follow/:id", async (req,res)=>{
    if(!(req.params.id===req.body.followId)){

        try{
            const user = await User.findById(req.params.id);
            !user && res.send("Your account Id not found");
            if(user){
                try{
                    const followId = await User.findById(req.body.followId);
                    !followId && res.send("User id not found");
                    if(followId){
                        if(!user.following.includes(req.body.followId)){
                            await user.updateOne({$push:{following:req.body.followId}});
                            await followId.updateOne({$push:{followers:req.params.id}});
                            res.status(200).json("User has been followed!");
                        }else{
                            res.status(403).json("You already follow this user!")
                        }
                    }
                }catch(error){
                    console.log(error);
                }
            }
        }catch(error){
            console.log(error)
        }
    }else{
        res.status(403).json("You cannot follow yourself!")
    }
})

// UNFOLLOW

router.post("/unfollow/:id",async(req,res)=>{
    if(req.params.id!==req.body.unfollowId){
        try{
            const user = await User.findById(req.params.id);
            !user && res.send("Your account id not found");
            if(user){
                try{
                    const unfollow = await User.findById(req.body.unfollowId);
                    !unfollow && res.send("User not found");
                    
                    if(unfollow){
                        if(user.following.includes(req.body.unfollowId)){
                            await user.updateOne({$pull:{following:req.body.unfollowId}});
                            await unfollow.updateOne({$pull:{followers:req.params.id}});
                            res.send("User has been unfollowed!")
                        }else{
                            res.status(403).send("You don't follow this user.")
                        }
                    }
                }catch(error){
                    console.log(error);
                }
        }
        }catch(error){
            console.log(error);
        }
    }else{
        res.status(403).send("You can't unfollow yourself.")
    }
})
module.exports = router;