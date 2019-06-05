const router = require('express').Router();

const authCheck = (req, res, next) => {
    if(!req.user){
        // executs if user is not logged in
        res.redirect('/auth/login');
    }else{
        // if logged in
        next();
    }
};

router.get('/', authCheck,(req, res) => {
    res.send('Your are logged in, Here i will take you to your profile-' + req.user.displayName);
})

module.exports = router;