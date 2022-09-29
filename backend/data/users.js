const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    isVerified: true,
  },
  {
    name: "Sanket",
    email: "sanket@example.com",
    password: bcrypt.hashSync("123456", 10),
    isVerified: true,
  },
  {
    name: "Shreeja",
    email: "shreeja@example.com",
    password: bcrypt.hashSync("123456", 10),
    isVerified: true,
  },
];

module.exports = users;
