const expressApp = require('express');

const user = require('../../models/User');

const REGISTER_PAGE_URL = '/register';
const REGISTER_PAGE_VIEW_URL = 'auth/registrationPage.ejs'; 

const HOME_PAGE_URL = '/home';

const PAGE_TITLE = 'Register';

exports.getRegistrationPage = (req, res, next) => {
    let userExists = false;
    renderRegistrationPage(res, userExists);
};

const renderRegistrationPage = (res, userExists) => {
    res.render(REGISTER_PAGE_VIEW_URL, {
        pageTitle: PAGE_TITLE,
        userExists: userExists
    });
}

exports.postRegistrationDetails = (req, res, next) => {
    user.findByEmail(req.body.email)
        .then((user) => onUserQueried(user, req, res))
        .catch((error) => onError('Error finding user', error));
};

const onUserQueried = (user, req, res) => {
    if (!user){
        createUser(req.body.email, req.body.password, req.body.isEmployer)
        .then((result) => onUserCreated(res, req));
    } else {
        createRegisterResponsePageForUserAlreadyExisting(res);
    }
};

const createUser = (email, password, isEmployer) => {
    return user.create({
        email: email,
        password: password,
        isEmployer: isEmployer
    });
};

const onUserCreated = (res, req) => {
    setUserAsLoggedIn(req);
    gotoHomePage(res);
};

const setUserAsLoggedIn = (req) => {
    req.session.isLoggedIn = true;
};

const gotoHomePage = (res) => {
    res.redirect(HOME_PAGE_URL);
};

const createRegisterResponsePageForUserAlreadyExisting = (res) => {
    let userExists = true;
    renderRegistrationPage(res, userExists)
        .then((result) => refreshRegisterPage(res))
        .catch((error) => {
            onError("error rendering register page", error);
        });
};

const refreshRegisterPage = (res) => {
    res.redirect(REGISTER_PAGE_URL);
};

const onError = (message, error) => {
    console.log(message + JSON.stringify(error));
};

