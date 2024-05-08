const express = require("express")


const app = express.Router()

const personRoutes = require("./person.routes")
const productRoutes = require("./product.routes")
const authRoutes = require("./auth.routes")
const privateRoutes = require("./private.routes")

const check = require("../middleware")





app.use("/product", productRoutes)
app.use("/person", personRoutes)
app.use("/auth", authRoutes)



app.use("/profile",check , privateRoutes)






module.exports = app