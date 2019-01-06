const expressApp = require('express');

exports.getRegistrationPage = (req, res, next) => {
    res.render('auth/registrationPage', {
        pageTitle: "Register"
    });
};

exports.postRegistrationDetails = (req, res, next) => {
    console.log('registration details: ' + req.body.isEmployer);
    
}
