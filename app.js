const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const registrationRoutes = require('./routes/auth/registration');
const homeRoutes = require('./routes/home/homeRoutes');

const user = require('./models/User.js');

const sequelize = require('./util/database/config.js');

const expressApp = express();

expressApp.set("view engine", "ejs");
expressApp.set("views", "views");

expressApp.use(bodyParser.urlencoded({extended : false}));

expressApp.use(express.static(path.join(__dirname, "public")));

expressApp.use(registrationRoutes);
expressApp.use(homeRoutes);

sequelize.sync({logging: console.log, force: true})
    .then((result) => {
        expressApp.listen(3000);
    })
    .catch((error) => {
        console.log('Sequelize error:' + error);
    });
