import { getAllProducts } from '../controllers/products.js';

export default (router) => {
    router.get('/products/getAllProducts', getAllProducts);
}