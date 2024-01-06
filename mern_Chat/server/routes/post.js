const router = require("express").Router();
const Post = require("../models/Posts.js");
const User = require("../models/User.js");

require('colors');


// CREATE POST

router.post("/", async (req, res) => {
  try {
    const post = new Post({
      userId: req.body.userId,
      postImage: req.body.postImage,
      description: req.body.description,
    });
    await post.save();
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
  }
});

// UPDATE POST

router.put("/update/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    !post && res.status(403).send("User Id not found.");
    if (post) {
      if (post.userId === req.body.userId) {
        try {
          await post.updateOne({ $set: req.body });
          res.status(200).send("Post has been updated!");
        } catch (error) {
          res.status(500).send(error);
          console.log(error);
        }
      } else {
        res.status(403).send("You cannot update others post!");
      }
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// DELETE POST

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    !post && res.status(403).send("User Id not found");
    if (post) {
      if (post.userId === req.body.userId) {
        try {
          await Post.findByIdAndDelete(req.params.id);
          res.status(200).send("The post has been deleted!");
        } catch (error) {
          console.log(error);
        }
      } else {
        res.status(403).send("You cannot delete others post!");
      }
    }
  } catch (error) {
    res.status(500).send(`${error}`);
    console.log(error);
  }
});

// LIKE AND DISLIKE

router.put("/like/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        !post && res.status(404).send("Post not found");
        if(post){
            if(!post.likes.includes(req.body.userId)){
                try{
                    await post.updateOne({$push:{likes:req.body.userId}});
                    res.status(200).send("Post has been liked!");
                }catch(error){
                    res.status(500).send(`${error}`);
                    console.log(error);
                }
            }else{
                try{
                    await post.updateOne({$pull:{likes:req.body.userId}});
                    res.status(200).send("Post has been disliked!");
                }catch(error){
                    res.status(500).send(`${error}`);
                    console.log(error);
                }
            }
        }
    }catch(error){
        res.status(500).send(`${error}`);
        console.log(error);
    }
})

// GET POST 

router.get("/:id",async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        !post && res.status(404).send("Post not found.")
        if(post){
            res.status(200).send(post);
        }

    }catch(error){
        res.status(500).send(`${error}`);
        console.log(error);
    }
})

// GET TIMLINE POSTS    


// Note this methods clashes with the previous get request and misinterprets the word 'timeline' as id
// Therefore we use extended url here

router.get("/timeline/all",async (req,res)=>{
    try{
        const loggedUser = await User.findById(req.body.userId);
        const logUserPosts = await Post.find({userId:loggedUser._id});
        const friendPosts = await Promise.all(
            loggedUser.following.map((friendPostId)=>{
                return Post.find({userId:friendPostId});
            })
        );
        res.json(logUserPosts.concat(...friendPosts));
    }catch(error){
        console.log(error);
    }
})


module.exports = router;
