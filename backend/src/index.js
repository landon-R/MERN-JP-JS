const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app =  express()


//middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

//require
require('dotenv').config()
require('./db')

//routes
app.use('/', require('./routes/paciente'))

const port = process.env.PORT
app.listen(port, ()=> {
    console.log(`server conected ${port}`);
})