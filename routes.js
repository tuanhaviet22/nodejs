const express = require("express")
const mongodb = require('mongodb')
 
const router  = express.Router();

router.get('/api',async (req,res)=> {
    res.send("halo")
})



module.exports = router