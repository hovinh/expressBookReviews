const express = require("express");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  users.push({
    name: req.query.name,
  });
  res.send("The user " + req.query.name + " has been added!");
});

// Get the book list available in the shop
public_users.get("/", function (req, res) {
  //Write your code here
  res.send(JSON.stringify({ books }, null, 4));
});

// const axios = require('axios');

// public_users.get("/", async function (req, res) {
//   try {
//     const getBooks = () => Promise.resolve({ books });
//     const data = await getBooks();
//     res.send(JSON.stringify(data, null, 4));
//   } catch (error) {
//     res.status(500).send({ message: "Error fetching books" });
//   }
// });

// public_users.get("/isbn/:isbn", async function (req, res) {
//   const isbn = req.params.isbn;

//   // Simulate async data fetching with a Promise
//   const getBookByIsbn = (isbn) => {
//     return new Promise((resolve, reject) => {
//       const book = books[isbn];
//       if (book) {
//         resolve({ book });
//       } else {
//         reject({ message: "Book not found" });
//       }
//     });
//   };

//   try {
//     const data = await getBookByIsbn(isbn);
//     res.send(JSON.stringify(data, null, 4));
//   } catch (error) {
//     res.status(404).send(error);
//   }
// });

// public_users.get("/author/:author", async function (req, res) {
//   const author = req.params.author;

//   // Simulate async data fetching with a Promise
//   const getBooksByAuthor = (author) => {
//     return new Promise((resolve, reject) => {
//       const booksByAuthor = Object.values(books).filter(
//         (book) => book.author.toLowerCase() === author.toLowerCase()
//       );
//       if (booksByAuthor.length > 0) {
//         resolve({ booksByAuthor });
//       } else {
//         reject({ message: "No books found for this author" });
//       }
//     });
//   };

//   try {
//     const data = await getBooksByAuthor(author);
//     res.send(JSON.stringify(data, null, 4));
//   } catch (error) {
//     res.status(404).send(error);
//   }
// });
// public_users.get("/title/:title", async function (req, res) {
//   const title = req.params.title;

//   // Simulate async data fetching with a Promise
//   const getBooksByTitle = (title) => {
//     return new Promise((resolve, reject) => {
//       const booksByTitle = Object.values(books).filter(
//         (book) => book.title.toLowerCase() === title.toLowerCase()
//       );
//       if (booksByTitle.length > 0) {
//         resolve({ booksByTitle });
//       } else {
//         reject({ message: "No books found for this title" });
//       }
//     });
//   };

//   try {
//     const data = await getBooksByTitle(title);
//     res.send(JSON.stringify(data, null, 4));
//   } catch (error) {
//     res.status(404).send(error);
//   }
// });
// Get book details based on ISBN
public_users.get("/isbn/:isbn", function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    res.send(JSON.stringify({ book }, null, 4));
  } else {
    res.status(404).send({ message: "Book not found" });
  }
});

// Get book details based on author
public_users.get("/author/:author", function (req, res) {
  const author = req.params.author;
  // Convert books object to array and filter by author
  const booksByAuthor = Object.values(books).filter(
    (book) => book.author.toLowerCase() === author.toLowerCase()
  );
  if (booksByAuthor.length > 0) {
    res.send(JSON.stringify({ booksByAuthor }, null, 4));
  } else {
    res.status(404).send({ message: "No books found for this author" });
  }
});

// Get all books based on title
public_users.get("/title/:title", function (req, res) {
  const title = req.params.title;
  const booksByTitle = Object.values(books).filter(
    (book) => book.title.toLowerCase() === title.toLowerCase()
  );
  if (booksByTitle.length > 0) {
    res.send(JSON.stringify({ booksByTitle }, null, 4));
  } else {
    res.status(404).send({ message: "No books found for this title" });
  }
});

//  Get book review
public_users.get("/review/:isbn", function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];
  if (book) {
    res.send(JSON.stringify(book.reviews, null, 4));
  } else {
    res.status(404).send({ message: "Book not found" });
  }
});

module.exports.general = public_users;
