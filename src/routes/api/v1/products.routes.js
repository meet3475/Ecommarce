const express = require("express");
const { productsController } = require("../../../controller");

const routes = express.Router();

//localhost:3000/api/v1/products/list-products
routes.get(
    '/list-products',
    productsController.listproducts
)

routes.get(
    '/get-products/:product_id', 
    productsController.getproducts
)

routes.post(
    '/add-products', 
    productsController.addproducts
)

routes.put(
    '/update-products', 
    (req, res) => {
    console.log('Products update Api');
    res.send('Products update Api');
})

routes.delete(
    '/delete-products/:product_id', 
    productsController.deleteproducts
)


module.exports = routes;