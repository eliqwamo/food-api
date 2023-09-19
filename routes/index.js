import express from 'express';
const router = express.Router();

//IMPORT ROUTER PAGES
import categories from './categories.js';
import products from './products.js';
import accounts from './accounts.js';


export default () => {
    categories(router);
    products(router);
    accounts(router);
    return router;
}