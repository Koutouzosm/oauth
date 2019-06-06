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
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    }
});

const User = mongoose.model('users', userSchema);

module.exports = User;