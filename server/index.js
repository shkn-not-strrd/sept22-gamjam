const express = require("express");
const app = express();
const port = 3003;
const mysql = require("mysql");

var hash = require("pbkdf2-password")();
var path = require("path");
var session = require("express-session");

const con = mysql.createConnection({
  host: "localhost:3008",
  user: "yourusername",
  password: "yourpassword",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  res.send("Oh, a widdle woggin!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
