import Sequelize from 'sequelize';
import database from '../utilis/database.js';

const ProductImages = database.define("productsImages",{
    id : {type: Sequelize.INTEGER,autoIncrement: true,allowNull: false,primaryKey: true},
    imageUrl: {type: Sequelize.STRING, allowNull: false},
    productId: {type: Sequelize.INTEGER, allowNull: false}
})

export default ProductImages;