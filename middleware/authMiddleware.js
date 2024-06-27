const jwt = require("jsonwebtoken");
const secret = "A2pJI__dKhLg9WFbNp6Tq"; // Replace with your actual secret

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Authorization header missing" });
  }
  try {
    const decodedToken = jwt.verify(token.split(" ")[1], secret);
    req.userId = decodedToken.userId; // Extract userId from the decoded token
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = { authenticate };
