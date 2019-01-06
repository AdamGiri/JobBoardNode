const expressApp = require('express');

const homeController = require('../../controllers/home/homeController');

const router = expressApp.Router();

router.get('/home', homeController.getHomePage);

module.exports = router;