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
    var newUser = new User({username: req.body.username,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            budget: req.body.budget,
                            Food: req.body.food,
                            Leisure: req.body.Leisure,
                            Health: req.body.Health,
                            Education: req.body.Education,
                            Sports: req.body.Sports,
                            Transportation: req.body.Transportation
    });

    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register", {error: err.message});
        }
        passport.authenticate("local")(req, res, function(){
            //req.flash("success", "Welcome " + user.username + "!");
            res.redirect("/"+req.user._id);
        });
    });
});

// show login form
router.get("/login", function(req, res){
    res.render("login", {page: 'login'});
});

// handling login logic
router.post("/login", passport.authenticate("local",
    {
        failureRedirect: "/login"
    }), function(req, res){
    res.redirect('/'+req.user._id);
});

// logic route
router.get("/logout", function(req, res){
    req.logout();
    //req.flash("success", "Logged You Out!");
    res.redirect("/");
});

router.get("/:id", function(req, res){
    // User.find({ username: 'Sterling' },function(err, user) {
    //     if (err) throw err;
    //     console.log(user[0].username)
    //     // object of the user
    //     console.log(user);
    //     res.render("show", {name: user[0].username});
    // });

    if(mongoose.Types.ObjectId.isValid(req.user._id)) {
        User.findById(req.user._id).exec(function(err, foundUser){
            if(err){
                console.log(err);
            } else {
                console.log(foundUser);
                //render show template with that campground
                res.render("show", {user: foundUser});
            }
        });
    }
    else {
        console.log('haha');
    }


});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}
module.exports = router;
module.exports = router;
