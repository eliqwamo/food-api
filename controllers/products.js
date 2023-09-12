import { getProducts } from '../models/products.js';

export const getAllProducts = async(req,res) => {
    try {
        const products = await getProducts();
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}