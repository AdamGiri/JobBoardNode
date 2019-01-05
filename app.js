const express = require('express');

const allUserRoutes = require('./routes/allUser');

const expressApp = express();

expressApp.use(allUserRoutes);

expressApp.listen(3000);