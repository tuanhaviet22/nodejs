const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000 

const mongoose = require("mongoose")
require('dotenv/config')
// Middleware
app.use(bodyParser.json())
app.use(cors())

// Connect db
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    },
    () => {
        console.log("connected db");   
    }

)

// app.get('/',(req,res) => res.send('Hello Tuan'))
const router = require('./routes')
app.use("/",router)
app.listen(port,() => console.log(`Server is running on port ${port}`))