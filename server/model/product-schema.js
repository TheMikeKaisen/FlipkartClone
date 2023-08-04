
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true, // which means that the id is necessary and it cannot be empty
        unique: true    // if some other data cannot be imported with the same id
    }, 
    url: String, 
    detailUrl: String, 
    title: Object, 
    price: Object, 
    quantity: Number, 
    description: String, 
    discount: String, 
    tagline: String,

});

const Product = mongoose.model('product', productSchema); // creating a collection with productSchema structure

export default Product;

