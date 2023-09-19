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

//CRUD - Create Read Update Delete
//FUNCTIONS
//GET ALL ACCOUNTS FROM DATABASE // Read
export const getAccounts = () => Accounts.findAll();
//GET SINGLE ACCOUNT BY ID // Read
export const getAccountById = (id) => Accounts.findByPk(id);
//GET SINGLE ACCOUNT BY ID // Read
export const getAccountByEmail = (email) => Accounts.findAll({where: {email: email}});
//CREATE NEW ACCOUNT // Create
export const createNewAccount = (user) => Accounts.create(user);

//UPDATE ACCOUNT BY ID //Update
export const updateAccountById = (id,user) => {
    Accounts.findByPk(id)
    .then(async account => {

        account = user;
        await account.save((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("KO");
            }
        })
    })
};
//REMOVE ACCOUNT BY ID //Delete
export const deleteAccountById = (id) => {
    Accounts.findByPk(id)
    .then(account => {
        account.destroy()
    })
};