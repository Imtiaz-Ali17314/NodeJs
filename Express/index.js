const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log(`server is listening at port 3000`);
});

app.use((req, res) => {
  console.log("request received");
});
