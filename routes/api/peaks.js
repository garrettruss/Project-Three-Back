const express = require('express');
const router = express.Router();
const peaksCtrl = require('../../controllers/peaks');

router.get('/', peaksCtrl.index);
router.post('/', peaksCtrl.create);

module.exports = router;