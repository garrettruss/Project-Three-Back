const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peakSchema = new Schema({
    mountain: String,
    difficulty: String,
}, { timestamps: true });


module.exports = mongoose.model('Peak', peakSchema);