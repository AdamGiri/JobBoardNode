const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const registrationRoutes = require('./routes/auth/registration');
const homeRoutes = require('./routes/home/homeRoutes');

const expressApp = express();

expressApp.set("view engine", "ejs");
expressApp.set("views", "views");

expressApp.use(bodyParser.urlencoded({extended : false}));

expressApp.use(express.static(path.join(__dirname, "public")));

expressApp.use(registrationRoutes);
expressApp.use(homeRoutes);

expressApp.listen(3000);