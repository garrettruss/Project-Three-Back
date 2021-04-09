const Mountain = require('../models/mountain');


async function index(req, res) {
   try {
       const mountains = await Mountain.find({});
       res.status(200).json(mountains); // send mountains as JSON data as an HTTP response
   } catch (error) {
       console.log(error);
       res.status(400).json({ error: 'something went wrong' });
   }
}

async function create(req, res) {
    try {
        const mountain = await Mountain.create(req.body);
        res.status(201).json(mountain);
        // index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' });
    }
}

module.exports = {
    index,
    create,
};