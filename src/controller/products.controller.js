const Products = require("../model/products.model");

const listproducts = async (req, res) => {
    try {
        const products = await  Products.find();

        if (!products || products.length === 0) {
            res.status(404).json({
                success: false,
                message: "Products not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Products fetched sucessfully",
            data: products
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Intenal server error." + error.message
        })
    }
} 

const getproducts = () => {

}

const addproducts = () => {

}

module.exports = {
  listproducts,
  getproducts,
  addproducts
}