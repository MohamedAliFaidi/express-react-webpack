const express = require("express")


const app = express.Router()

app.post("/create",require("../controllers/person.controller").createPerson )





module.exports = app