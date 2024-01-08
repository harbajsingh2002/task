const { string } = require('joi');
const mongoose = require('mongoose');
const createSlug = require('../vailidation/userVelidation')

 
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    slug: String,
});

userSchema.pre('save', function (next) {
    this.slug = createSlug(this.username);
    next();
});

module.exports = mongoose.model('User', userSchema);
