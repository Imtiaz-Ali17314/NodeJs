const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`Standered GET request from ${username}`);
});

app.post("/register", (req, res) => {
  console.log(req.body);
  let { username, password } = req.body;
  res.send(`Standered POST request from ${username}`);
});

app.listen(port, () => {
  console.log(`Listening for requests on port: ${port}`);
});
