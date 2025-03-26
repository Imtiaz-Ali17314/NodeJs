const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});

app.use((req, res) => {
  console.log("request received");
  res.send("This is a basic response");
});
