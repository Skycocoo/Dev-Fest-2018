
var mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    first_name: String,
    last_name: String,
    password: String,
    monthly_budget: Number
});
userSchema.plugin(passportLocalMongoose);
var User = mongoose.model("User", userSchema);
module.exports = User;