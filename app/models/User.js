var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    role: Number,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    password_reset: String,
    profile_pic: String,
    active: Boolean,
    created_at: Mixed,
    updated_at: Mixed
}));