const express = require("express");
const jwt = require("jsonwebtoken");
const secret = "your_jwt_secret"; // Use a strong secret in production
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [{ name: "user1", password: "pass1" }];

const isValid = (username) => {
  return users.some((user) => user.name === username);
};

const authenticatedUser = (username, password) => {
  return users.some(
    (user) => user.name === username && user.password === password
  );
};

// only registered users can login
regd_users.post("/login", (req, res) => {
  const username = req.query.name;
  const password = req.query.password;
  //   const { username, password } = req.body;
  console.log(req.query);
  console.log(req.params);
  console.log(username, password);
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }
  if (!authenticatedUser(username, password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  // Generate JWT
  const token = jwt.sign({ username }, secret, { expiresIn: "1h" });
  return res.status(200).json({ message: "Login successful", token });
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
