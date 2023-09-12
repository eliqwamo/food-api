import express from 'express';
const router = express.Router();

//IMPORT ROUTER PAGES
import categories from './categories.js';


export default () => {

    categories(router);

    return router;
}