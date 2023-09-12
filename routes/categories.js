import { getAllCategories } from '../controllers/categories.js';

export default (router) => {
    router.get('/categories/getAllCategories', getAllCategories);
}