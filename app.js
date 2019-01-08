const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const SequelizeSessionStore = require('connect-session-sequelize')(session.Store);

const path = require('path');

const registrationRoutes = require('./routes/auth/registration');
const homeRoutes = require('./routes/home/homeRoutes');

const user = require('./models/User.js');
const jobPosting = require('./models/JobPosting.js');

const sequelize = require('./util/database/config.js');

const expressApp = express();

const sequelizeSessionStore = new SequelizeSessionStore({
    db: sequelize
});

expressApp.set("view engine", "ejs");
expressApp.set("views", "views");

expressApp.use(bodyParser.urlencoded({extended : false}));

expressApp.use(express.static(path.join(__dirname, "public")));

expressApp.use(session({
    store: sequelizeSessionStore,
    saveUninitialized: false, 
    resave: false, 
    secret: 'My-Secret'}));

expressApp.use(registrationRoutes);
expressApp.use(homeRoutes);

sequelizeSessionStore.sync()
    .then((result) => {
        sequelize.sync({logging: console.log})
    })
    .then((result) => {
        jobPosting.create({
            title: 'NHS',
            description: 'Software developer role',
            employerEmail: 'adam@gmail.com'
        });
    })
    .then((result) => {
        expressApp.listen(3000);
    })
    .catch((error) => {
        console.log('Sequelize error:' + error);
    });
