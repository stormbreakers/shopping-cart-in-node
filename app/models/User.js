var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var User = new Schema({
    role: Number,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    password_reset: String,
    profile_pic: String,
    active: Boolean,
    created_at: Date,
    updated_at: Date
});
module.exports = mongoose.model('user', User);