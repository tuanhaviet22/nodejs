const express = require("express")
const mongodb = require('mongodb')
 
const router  = express.Router();

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://root:1234@cluster0-2qqi4.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

router.get('/api',(req,res)=> {
    res.send(collection)
})




module.exports = router