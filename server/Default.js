import product from "./model/productSchema.js";
import { products } from "./Constants/Product.js";


const DefaultData = async () => {
    try {
        await product.insertMany(products)
        console.log("Data Imported!")
    } catch (error) {
        console.log('Error1')

    }
}

export default DefaultData;