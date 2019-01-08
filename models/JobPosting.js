const Sequelize = require('sequelize');

const configuredSequelize = require('../util/database/config.js');

const JobPosting = configuredSequelize.define('job-posting', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    employerEmail: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = JobPosting;

