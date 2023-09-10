import Sequelize from 'sequelize';
import database from '../utilis/database.js';

const Products = database.define("products",{
    id : {type: Sequelize.INTEGER,autoIncrement: true,allowNull: false,primaryKey: true},
    prodName: {type: Sequelize.STRING,allowNull: false},
    prodDesc: {type: Sequelize.STRING,allowNull: false},
    prodPrice: {type: Sequelize.FLOAT,allowNull: false},
    categoryId: {type: Sequelize.INTEGER,allowNull: false},
    storeId: {type: Sequelize.INTEGER,allowNull: false},
})

export default Products;