const expressApp = require('express');

const user = require('../../models/User');

exports.getRegistrationPage = (req, res, next) => {
    res.render('auth/registrationPage', {
        pageTitle: "Register"
    });
};

exports.postRegistrationDetails = (req, res, next) => {
    createUser(req.body.email, req.body.password, req.body.isEmployer);
}

const createUser = (email, password, isEmployer) => {
    user.create({
        email: email,
        password: password,
        isEmployer: isEmployer
    });
};
