// Connect with server

const express = require("express");
const app = express();

const port = 8080;

// Server is listening for request

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});

// Request Parse and routing and also send response

app.get("/:username/:password", (req, res) => {
  let { username, password } = req.params;
  res.send(`<h1>Welcome to the page of @${username}</h1>`);
});

// Request routing with query strings

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("nothing to search");
  }
  res.send(`<h1>Search results for query: ${q}</h1>`);
});
