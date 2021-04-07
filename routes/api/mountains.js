const express = require('express');
const router = express.Router();
const mountainsCtrl = require('../../controllers/mountains');

router.get('/', mountainsCtrl.index);
router.post('/', mountainsCtrl.create);

module.exports = router;