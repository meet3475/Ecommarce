const express = require("express");

const routes = express.Router();

const categoriesRoute = require("./categories.routes");

//localhost:3000/api/v1/categories
routes.use("/categories", categoriesRoute)

module.exports = routes;