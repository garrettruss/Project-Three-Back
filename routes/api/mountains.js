const express = require('express');
const router = express.Router();
const mountainsCtrl = require('../../controllers/mountains');

router.get('/', mountainsCtrl.index);
router.post('/', mountainsCtrl.create);
router.delete('/:id', mountainsCtrl.delete);
router.put('/:id', mountainsCtrl.update);

module.exports = router;