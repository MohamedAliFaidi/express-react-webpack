const private = async (req, res) => {
  try {
    res.status(200).json({ message: "authorized", auth: true });
  } catch (error) {
    res.status(500).json({ message: "error accessing the private room",auth:false });
  }
};

module.exports = { private };
