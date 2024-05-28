const express = require("express");

const routes = express.Router();

//localhost:3000/api/v1/categories/list-categories
routes.get('/list-categories', (req, res) => {
    console.log('Categories Get Api');
    res.send('Categories Get Api');
})

routes.post(
    '/add-categories', 
    (req, res) => {
    console.log('Categories Add Api');
    res.send('Categories add Api');
})

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