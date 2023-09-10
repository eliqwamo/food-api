import Sequelize from 'sequelize';
import database from '../utilis/database.js';

const Stores = database.define("stores", {
    id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    categoryId: { type: Sequelize.INTEGER, allowNull: false },
    storeName: { type: Sequelize.STRING, allowNull: false },
    storeAddress: Sequelize.STRING,
    storePhone: Sequelize.STRING,
    storeHours: Sequelize.STRING,
    storeLogo: Sequelize.STRING,
    storeCity: { type: Sequelize.STRING, allowNull: false },
    storeEmail: { type: Sequelize.STRING, allowNull: false },
})

export default Stores;