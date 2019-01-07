const expressApp = require('express');

const user = require('../../models/User');

const REGISTER_PAGE_URL = '/register';
const REGISTER_PAGE_VIEW_URL = 'auth/registrationPage.ejs';

const PAGE_TITLE = 'Register';

exports.getRegistrationPage = (req, res, next) => {
    res.render(REGISTER_PAGE_VIEW_URL, {
        pageTitle: PAGE_TITLE
    });
};

exports.postRegistrationDetails = (req, res, next) => {
    user.findByEmail(req.body.email)
        .then((user) => onUserQueried(user, req.body, res))
        .catch((error) => onError('Error finding user', error));
};

const onUserQueried = (user, requestBody, res) => {
    if (!user){
        createUser(requestBody.email, requestBody.password, requestBody.isEmployer)
        .then((result) => {
         //redirect to home page
        });
    } else {
        console.log('User already exists: ' + user.email);
        renderRegisterResponsePage(res, {userExists: true}, REGISTER_PAGE_URL);
    }
};

const createUser = (email, password, isEmployer) => {
    return user.create({
        email: email,
        password: password,
        isEmployer: isEmployer
    });
};

const renderRegisterResponsePage = (res, renderObject) => {
    res.render(REGISTER_PAGE_VIEW_URL, renderObject)
        .then((result) => {
            res.redirect(REGISTER_PAGE_URL);
        })
        .catch((error) => {
            onError("error rendering register page", error);
        });
};

const onError = (message, error) => {
    console.log(message + JSON.stringify(error));
};

