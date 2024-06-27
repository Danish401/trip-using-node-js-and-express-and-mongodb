const User = require("../models/User");
const bcrypt = require("bcryptjs"); // Correct bcrypt library
const jwt = require("jsonwebtoken"); // Correct JWT library

const secret = "A2pJI__dKhLg9WFbNp6Tq"; // Replace with your actual secret

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("USER NOT FOUND");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "12h" });
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
