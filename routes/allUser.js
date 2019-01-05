const express = require('express');

const allUserController = require('../controllers/allUserController');

const router = express.Router();

router.get('/', allUserController.getLandingPage);

module.exports = router;