const expressApp = require('express');

exports.getRegistrationPage = (req, res, next) => {
    res.render('auth/registrationPage', {
        pageTitle: "Register"
    });
};
