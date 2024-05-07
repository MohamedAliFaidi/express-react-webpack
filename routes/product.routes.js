const express = require("express")


const app = express.Router()
const productController = require("../controllers/product.controller")
app.post("/create",productController.createProduct )


module.exports = app