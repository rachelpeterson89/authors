const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author must have a name!"],
        minlength: [3, "Name must be at least 3 characters"],
        maxlength: [60, "Name must be less than 50 characters"]
    }
}, {timestamps: true})

module.exports.Author = mongoose.model("Author", AuthorSchema);