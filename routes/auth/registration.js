const express = require('express');

const registrationController = require('../../controllers/auth/registrationController');

const router = express.Router();

router.get('/register', registrationController.getRegistrationPage);
router.post('/register/submit', registrationController.postRegistrationDetails);

module.exports = router;