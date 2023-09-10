import Sequelize from 'sequelize';
import database from '../utilis/database.js';

const OrderItems = database.define("orderItems",{
    id : {type: Sequelize.INTEGER,autoIncrement: true,allowNull: false,primaryKey: true},
    orderId: {type: Sequelize.INTEGER, allowNull: false},
    productId: {type: Sequelize.INTEGER, allowNull: false},
    quantity: {type: Sequelize.INTEGER, allowNull: false},
})

export default OrderItems;