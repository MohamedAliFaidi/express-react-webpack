const Person = require("../models/person.model")


const createPerson = async (req, res) => {
    try {
        const connect = require("../lib/db")
        await connect()

        const person = await Person.create(req.body)
        res.status(201).json({ message: "created", person })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", error })

    }
}


module.exports = {createPerson}