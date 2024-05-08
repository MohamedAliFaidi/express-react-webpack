const express = require("express")


const app = express.Router()

app.get("/update" ,require("../controllers/private.controller").private)







module.exports = app