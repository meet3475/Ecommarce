const express = require("express");

const routes = express.Router();

//localhost:3000/api/v1/subcategories/list-subcategories
routes.get('/list-subcategories', (req, res) => {
    console.log('Subcategories Get Api');
    res.send('Subcategories Get Api');
})

routes.post(
    '/add-subcategories', 
    (req, res) => {
    console.log('Subcategories Add Api');
    res.send('Subcategories add Api');
})

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