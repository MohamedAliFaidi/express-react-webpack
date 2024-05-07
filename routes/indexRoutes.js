const express = require("express")


const app = express.Router()

const personRoutes = require("./person.routes")
const productRoutes = require("./product.routes")


app.use("/product",productRoutes)
app.use("/person",personRoutes)





module.exports = app