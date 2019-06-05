const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require('./keys');
const User = require('../models/user.js')


passport.use(
   new GoogleStrategy({
    // options for the google stratagy
    callbackURL:'/auth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
 }, (accessToken, refreshToken, profile, done) => {
    //  passport callback funtion
   console.log("passport callback function fired");
   console.log(profile);
   new User({
      displayName: profile.displayName,
      googleID: profile.id,
   }).save().then((newUser) => {
      console.log('new user created:' + newUser);
   })
 })
)