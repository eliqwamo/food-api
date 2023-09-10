import Sequelize from 'sequelize';
import database from '../utilis/database.js';

const Accounts = database.define("accounts",{
    id : {type: Sequelize.INTEGER,autoIncrement: true,allowNull: false,primaryKey: true},
    email: {type: Sequelize.STRING,allowNull: false},
    password: {type: Sequelize.STRING,allowNull: false},
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    verifyCode: {type: Sequelize.INTEGER,allowNull: false},
    isApproved: Sequelize.BOOLEAN,
    avatar: Sequelize.STRING,
    role: {type: Sequelize.STRING,allowNull: false},
})

export default Accounts;