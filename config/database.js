// TODO: establish a connection to mongodb 

mongoose = require('mongoose');
const db = mongoose.connection;

require('dotenv').config();

mongoose.connect(`${process.env.DB_URL}`,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
    }
);


db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});