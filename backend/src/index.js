const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');


//_* APP SERVER
require('./config')
const app =  express()
const port = process.env.PORT 
app.listen(port, ()=> {
    console.log(`server conected ${port}`);
})

//_* DB MONGODB
require('./db')


//_* MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors())



//_* ROUTERS
app.use('/', require('./routes/paciente'))

