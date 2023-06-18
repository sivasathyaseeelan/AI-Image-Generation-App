const express = require('express');
const { signinController, signupController } = require('./../controllers/userController');
const router = express.Router();

router.post('/Signin', signinController);
router.post('/Signup', signupController);

module.exports = router;