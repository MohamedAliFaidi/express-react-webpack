const express = require("express")


const app = express.Router()

app.post("/register", require("../controllers/auth.controller").register)
app.post("/login", require("../controllers/auth.controller").login)






module.exports = app