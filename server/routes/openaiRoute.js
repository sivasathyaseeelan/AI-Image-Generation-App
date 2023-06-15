const express = require('express');
const openaiController = require('./../controllers/openaiController')
const router = express.Router();

router.post('/processText',openaiController);

module.exports = router;