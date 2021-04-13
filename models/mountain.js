const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mountainSchema = new Schema({
    uid: String,
    mountain: String,
    difficulty: String,
    state: String,
    firstTime: String,
    list: String,
    weather: String,
    comment: String,
    //
},
 { timestamps: true });


module.exports = mongoose.model('Mountain', mountainSchema);