const express = require('express')
const dotenv = require('dotenv');
const path = require('path')
const {connectDB} = require('./models/user')
const cors = require('cors')
const bodyParser = require('body-parser')
dotenv.config()
const app = express()

app.use(cors())
app.use(bodyParser.json())
connectDB()



app.use('/', require('./routers/cadastro'))

app.listen(3000, console.log("headafzvfl"))