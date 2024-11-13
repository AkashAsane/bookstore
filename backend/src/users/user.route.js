const jwt = require("jsonwebtoken");
const User = require("./user.model");

const express = requie("express");
const router = express.Router();

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });
    if (!admin) {
      res.status(404).send({ message: "Admin not Found" });
    }
    if (username.password !== admin.password) {
      res.status(401).send({ message: "Invalid credentials!" });
    }

    const token = jwt.sign({ id: admin._id, username: admin.username ,role: admin.role},
        sec
    );
  } catch (error) {
    console.error("Failed to login as admin", error);
    res.status(401).send({ message: "Failed to login as admin" });
  }
});
