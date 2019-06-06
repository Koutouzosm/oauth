const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    movie: {
        type: String,
        required: false
    },
    googleid: {
        type: String,
        required: true
    },
    unique: {
      type: String,
      required: true
    }
});

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;