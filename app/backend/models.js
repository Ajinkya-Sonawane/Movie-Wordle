const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

const Movies = mongoose.model("movie_names", MoviesSchema);

module.exports = Movies;