const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mountainSchema = new Schema({
    mountain: String,
    difficulty: String,
}, { timestamps: true });


module.exports = mongoose.model('Mountain', mountainSchema);