const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: Object,
    title: String,
    link: String,
    rating: Number,
    notes: String
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);gi