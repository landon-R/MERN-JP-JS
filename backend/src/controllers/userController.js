const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

exports.createUser = async () => {
    try {
        res.json({ok: true, error}) 
    } catch (error) {
        res.json({ok: false, error})
    }
}