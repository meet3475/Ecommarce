const express = require("express");

const routes = express.Router();

//localhost:3000/api/v1/products/list-products
routes.get('/list-products', (req, res) => {
    console.log('Products Get Api');
    res.send('Products Get Api');
})

routes.post(
    '/add-products', 
    (req, res) => {
    console.log('Products Add Api');
    res.send('Products add Api');
})

routes.put(
    '/update-products', 
    (req, res) => {
    console.log('Products update Api');
    res.send('Products update Api');
})

routes.delete(
    '/delete-products', 
    (req, res) => {
    console.log('Products delete Api');
    res.send('Products delete Api');
})


module.exports = routes;