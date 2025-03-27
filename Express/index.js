const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});

app.get("/:username/:password", (req, res) => {
  let { username, password } = req.params;
  res.send(`Welcome to the page of @${username}`);
});
