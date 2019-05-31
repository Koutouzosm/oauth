const express = require('express')
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;



// set up veiw engine
app.set('view engine', 'ejs');

// connection to mongoDB

app.use (express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authRoutes);

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/oauth-test-db', { useNewUrlParser: true });


// set up routes
app.use('/auth', authRoutes);


//  create our home route
app.get('/', (req, res) => {
    res.render('home');
})


app.listen (3000, () => {
    console.log(`app now listening for requests on ${PORT}`);
});