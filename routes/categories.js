import express from 'express';
import { getAllCategories } from '../controllers/categories.js';

export default (router) => {
    router.get('/categories/getCategories', getAllCategories);
}