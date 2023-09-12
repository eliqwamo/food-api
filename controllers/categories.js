import express from 'express';
import { getCategories } from '../models/categories.js';

export const getAllCategories = async(req,res) => {
    console.log('CONTROLLER');
    try {
        const categories = await getCategories();
        return res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}