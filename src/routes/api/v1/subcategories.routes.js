const express = require("express");
const { subcategoriesController } = require("../../../controller");

const routes = express.Router();

//localhost:3000/api/v1/subcategories/list-subcategories
routes.get(
    '/list-subcategories', 
    subcategoriesController.listsubcategories
)

routes.get(
    '/get-subcategories', 
    subcategoriesController.getsubcategory
)

routes.post(
    '/add-subcategories', 
    subcategoriesController.addsubcategory
)

routes.put(
    '/update-subcategory', 
    (req, res) => {
    console.log('Subcategory update Api');
    res.send('Subcategory update Api');
})

routes.delete(
    '/delete-subcategory', 
    (req, res) => {
    console.log('Subcategory delete Api');
    res.send('Subcategory delete Api');
})


module.exports = routes;