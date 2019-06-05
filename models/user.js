const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    displayName: {
        type: String,
        trim: true,
        required: true
    },
    googleid: {
        type: String,
    },
    thumbnail: {
        type: String
    }   
});

const User = mongoose.model('user', userSchema);

module.exports = User;