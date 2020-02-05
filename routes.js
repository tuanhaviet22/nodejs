const express = require("express")
const mongodb = require('mongodb')
const Post = require('./models/Post') 

const router  = express.Router();

router.get('/post',async (req,res)=> {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.json(error)
    }
})

router.post('/post', async (req,res) => {
   const post = new Post({
       title : req.body.title,
       desc : req.body.desc
   })
  
   try {
        const savedPost = await post.save()
        res.json(savedPost).status(200)
   } catch (error) {
       res.json(error).status(400)
   }
    
})


module.exports = router