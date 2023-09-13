import express from 'express';
import { getCategories, addNewCategory } from '../models/categories.js';

export const getAllCategories = async(req,res) => {
    try {
        const categories = await getCategories();
        return res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const createNewCategory = async(req,res) => {
    try {
        const category = req.body.category;
        const new_category = await addNewCategory(category);
        return res.status(200).json(new_category);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}