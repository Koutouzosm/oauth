const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require('./keys');
const User = require('../models/user.js')

passport.serializeUser((user, done)=> {
   done(null, user.id);
});

passport.deserializeUser((id, done)=> {
   User.findById(id).then((user) => {
      done(null, user);
   });
});


passport.use(
   new GoogleStrategy({
    // options for the google stratagy
    callbackURL:'/auth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
 }, (accessToken, refreshToken, profile, done) => {
    // Chekc if user already exists in db

    User.findOne({googleid: profile.id}).then((currentUser) => {
      if(currentUser){
         // User already exists
         console.log("user is: ", currentUser)
         done(null, currentUser);
      }else {
         // if not, create user in our database
         new User({
            displayName: profile.displayName,
            googleid: profile.id,
         }).save().then((newUser) => {
            console.log('new user created:' + newUser);
            done(null, newUser);
         })
      }
    });

 })
)