const mongoose = require('mongoose');
// require('./config')

const db =  process.env.URLDB

mongoose.connect(db, {
    useCreateIndex: true,
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
} , () => {
    console.log('DB mongodb conected exitozamente');
} )