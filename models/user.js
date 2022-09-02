const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    password: String
})

const User = mongoose.model('Person', userSchema);

module.exports = User
