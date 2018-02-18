var express = require('express');
var router = express.Router();

var passport = require('passport');
var User   = require('../models/user');
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/finance");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'First App 1' });
});

//AUTH Routes
// show register form
router.get("/register", function(req, res){
    res.render("register", {page: 'register'});
});

//handle sign up logic
router.post("/register", function(req, res){
    console.log(req.body);
<<<<<<< HEAD
    // var newUser = new User({username: req.body.username});
    // newUser.save(newUser, req.body.password, function(err, user){
    //     if(err){
    //         console.log(err);
    //         return res.render("register", {error: err.message});
    //     }
    //     passport.authenticate("local")(req, res, function(){
    //         req.flash("success", "Welcome " + user.username + "!");
    //         res.redirect("/");
    //     });
    // });
    var data = new User({username: req.body.username, password: req.body.password});

    data.save(function (err, data) {
        console.log(data);
        console.log(data.username + " has " + data.password);
        //req.flash("success", "Welcome " + data.username + "!");
        res.redirect("/personal");
=======
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register", {error: err.message});
        }
        passport.authenticate("local")(req, res, function(){
            //req.flash("success", "Welcome " + user.username + "!");
            res.redirect("/");
        });
>>>>>>> 38f001c40ef95ab40e7c41d99fa4945e2dd4cf7b
    });
    // var data = new User({username: req.body.username, password: req.body.password});
    //
    // data.save(function (err, data) {
    //     console.log(data);
    //     console.log(data.username + " has " + data.password);
    //     //req.flash("success", "Welcome " + data.username + "!");
    //     res.redirect("/");
    // });
});

// show login form
router.get("/login", function(req, res){
    res.render("login", {page: 'login'});
});
// handling login logic
// handling login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/user",
        failureRedirect: "/login"
    }), function(req, res){
});

// logic route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged You Out!");
    res.redirect("/personal");
});

router.get("/personal", function(req, res){
    User.find({ username: 'Sterling' },function(err, user) {
        if (err) throw err;
        console.log(user[0].username)
        // object of the user
        console.log(user);
        res.render("personal", {page: 'personal', name: user[0].username});
    });

});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}
module.exports = router;
module.exports = router;
