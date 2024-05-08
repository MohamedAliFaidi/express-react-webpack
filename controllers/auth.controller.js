
const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const connect = require("../lib/db")
const register = async (req, res) => {
    try {
        await connect()
        const isUser = await User.findOne({ email: req.body.email });
        if (isUser) {
            return res.status(400).json({ message: "user already exist" });
        }
        const hash = await bcrypt.hash(req.body.password, 10);
        await User.create({
            email: req.body.email,
            password: hash,
        });
        res.status(201).json({ message: "user created" });

    } catch (error) {
        res.status(500).json({ message: "server error" });

    }
}



module.exports = { register }