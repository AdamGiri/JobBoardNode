const Sequelize = require('sequelize');

const sequelize = new Sequelize('JobBoard', 'postgres', 'Password1?', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});

module.exports = sequelize;