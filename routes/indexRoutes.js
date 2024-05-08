const express = require("express")


const app = express.Router()

const personRoutes = require("./person.routes")
const productRoutes = require("./product.routes")
const authRoutes = require("./auth.routes")



app.use("/product",productRoutes)
app.use("/person",personRoutes)
app.use("/auth",authRoutes)





module.exports = app