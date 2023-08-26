const express = require('express');
const router = express.Router();
const controller = require('../Controllers/Controller');

router.post('/signUp', controller.signup);
router.post('/signIn', controller.signin);

module.exports = router;
