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


async function index(req, res) {
   try {
       const mountains = await Mountain.find({ uid: req.query.uid }).sort('-list');
       res.status(200).json(mountains); // send skills as JSON data as an HTTP response
   } catch (error) {
       console.log(error);
       res.status(400).json({ error: 'something went wrong' });
   }
}

async function create(req, res) {
    try {
        const mountain = await Mountain.create(req.body);
        req.query.uid = mountain.uid;
        index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' });
    }
}

async function deleteMountain(req, res) {
    try {
        const deletedMountain = await Mountain.findByIdAndDelete(req.params.id);
        req.query.uid = deletedMountain.uid;
        index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' });
    }
}


async function update(req, res) {
    try {
        const updatedMountain = await Mountain.findByIdAndUpdate(
            req.params.id, req.body, { new: true }
            );
            req.query.uid = updatedMountain.uid;
            index(req, res);
        } catch (error) {
            res.status(401).json({ error: 'something went wrong' });
    }
}



module.exports = {
    index,
    create,
    delete: deleteMountain,
    update
};