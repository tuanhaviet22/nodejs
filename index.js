const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000 

// Middleware
app.use(bodyParser.json())
app.use(cors())

// app.get('/',(req,res) => res.send('Hello Tuan'))

const router = require('./routes')
app.use("/",router)
app.listen(port,() => console.log(`Server is running on port ${port}`))