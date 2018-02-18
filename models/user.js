
var mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    budget: Number,
    food: Number,
    Leisure: Number,
    Health: Number,
    Education: Number,
    Sports: Number,
    Transportation: Number
});
userSchema.plugin(passportLocalMongoose);
var User = mongoose.model("User", userSchema);
module.exports = User;