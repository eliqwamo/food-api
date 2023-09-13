import Sequelize from 'sequelize';
import database from '../utilis/database.js';

const Categories = database.define("categories",{
    id : {type: Sequelize.INTEGER,autoIncrement: true,allowNull: false,primaryKey: true},
    categoryName: {type: Sequelize.STRING, allowNull: false},
    categoryImage: {type: Sequelize.STRING, allowNull: false},
    categoryOrder: {type: Sequelize.INTEGER, allowNull: false},
    categoryDesc: Sequelize.STRING
})

export default Categories;



export const getCategories = () => Categories.findAll();
export const getCategoryById = (id) => {};
export const addNewCategory = (category) => Categories.create(category).then((cat) => {cat});
export const updateCategoryById = (id) => {};
export const deleteCategoryById = (id) => {};