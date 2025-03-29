// Require Express
const express = require("express");
const app = express();
const path = require("path");

// select Port
const port = 8080;

// Set Tampelet engine as EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Render function send a tampelet in the form of ejs file as response
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// Get data from server and pass it to ejs
app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal });
});

// Pass username to Instagram tampelet
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  res.render("instagram.ejs", { username });
});

// Send function sends a general response
app.get("/hello", (req, res) => {
  res.send("hello");
});

// Server is listening for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
