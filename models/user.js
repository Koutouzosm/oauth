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
    gender: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    movies: {
        type: [String],
        required: false
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;