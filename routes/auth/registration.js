const express = require('express');

const registrationController = require('../../controllers/auth/registrationController');

const router = express.Router();

router.get('/', registrationController.getRegistrationPage);

module.exports = router;