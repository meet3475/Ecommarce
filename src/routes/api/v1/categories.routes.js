const express = require("express");
const { categoriesController } = require("../../../controller");


const routes = express.Router();

//localhost:3000/api/v1/categories/list-categories
routes.get(
    '/list-categories',
    categoriesController.listcategories
)

routes.get(
    '/get-categories', 
    categoriesController.getcategory
)

routes.post(
    '/add-categories', 
    categoriesController.addcategory
)

routes.put(
    '/update-category', 
    (req, res) => {
    console.log('Category update Api');
    res.send('Categories update Api');
})

routes.delete(
    '/delete-category', 
    (req, res) => {
    console.log('Category delete Api');
    res.send('Categories delete Api');
})


module.exports = routes;