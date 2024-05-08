const private = async (req, res) => {
    try {

        res.status(200).json({ message: "you accessed the private room" })

    } catch (error) {
        res.status(500).json({ message: "error accessing the private room" })

    }
}



module.exports = { private }