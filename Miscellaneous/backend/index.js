const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`Standered GET request from ${username}`);
});

app.post("/register", (req, res) => {
  res.send("Standered POST request");
});

app.listen(port, () => {
  console.log(`Listening for requests on port: ${port}`);
});
