const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const registrationRoutes = require('./routes/auth/registration');

const expressApp = express();

expressApp.set("view engine", "ejs");
expressApp.set("views", "views");

expressApp.use(bodyParser.urlencoded({extended : false}));

expressApp.use(express.static(path.join(__dirname, "public")));

expressApp.use(registrationRoutes);

expressApp.listen(3000);