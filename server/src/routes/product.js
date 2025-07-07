import express from 'express';
import Product from '../models/product.js';


const ProductRouter = express.Router()

//to post product
ProductRouter.post('/artist/products', async (req,res) =>{
    try{
        const product = new Product(req.body);
        const savedProduct = await product.save();
        console.log (' product added successfully ,details are: ',savedProduct);

        res.status(201).json(savedProduct);            
    }  catch(err){
        console.log ('error while adding the product',err);
        res.status(400).json({Error: err.message});
    }
});



export default ProductRouter