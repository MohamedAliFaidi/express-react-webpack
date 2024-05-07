const Product = require("../models/product.model")

const createProduct = async (req, res) => {
    try {
        const connect = require("../lib/db")
        await connect()

        const product = await Product.create(req.body)
        res.status(201).json({ message: "created", product })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", error })

    }
}


module.exports = {createProduct}