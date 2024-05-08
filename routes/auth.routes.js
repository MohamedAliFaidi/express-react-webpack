const express = require("express")


const app = express.Router()

app.post("/register", require("../controllers/auth.controller").register)





module.exports = app