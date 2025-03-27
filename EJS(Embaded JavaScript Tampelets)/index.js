const express = require("express");
const app = express();

port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
