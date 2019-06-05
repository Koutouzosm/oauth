const express = require('express')
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();
const passport = require('passport');
const profileRoutes = require('./routes/profile-routes');

const PORT = process.env.PORT || 3000;



// set up veiw engine
app.set('view engine', 'ejs');

app.use(cookieSession( {
    maxAge: 24*60*60*1000,
    keys:[keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());



// connection to mongoDB

app.use (express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authRoutes);

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/oauth-test-db', { useNewUrlParser: true });


// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);



//  create our home route
app.get('/', (req, res) => {
    res.render('home');
})


app.listen (3000, () => {
    console.log(`app now listening for requests on ${PORT}`);
});