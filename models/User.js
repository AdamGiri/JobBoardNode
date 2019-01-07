const Sequelize = require('sequelize');

const sequelize = require('../util/database/config');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isEmployer: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
});

User.findByEmail = (email) => {
    return User.find({
             where: {
                email: email
             }
           });
};

module.exports = User;