const Peak = require('../models/peak');


async function index(req, res) {
   try {
       const peaks = await Peak.find({});
       res.status(200).json(peaks); // send peaks as JSON data as an HTTP response
   } catch (error) {
       console.log(error);
       res.status(400).json({ error: 'something went wrong' });
   }
}

async function create(req, res) {
    try {
        const peak = await Peak.create(req.body);
        res.status(201).json(peak);
        // index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' });
    }
}

module.exports = {
    index,
    create,
};


