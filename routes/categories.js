import { getAllCategories, createNewCategory } from '../controllers/categories.js';

export default (router) => {
    router.get('/categories/getAllCategories', getAllCategories);
    router.post('/categories/createNewCategory', createNewCategory);
}