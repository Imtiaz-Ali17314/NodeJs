const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});

// app.use((req, res) => {
//   console.log("request received");
//   res.send("This is a basic response");
// });

app.get("/", (req, res) => {
  res.send("You contract with root path");
});

app.get("/search", (req, res) => {
  res.send("You contract with search path");
});

app.get("/help", (req, res) => {
  res.send("You contract with help path");
});

app.get("*", (req, res) => {
  res.send("this path does not exist");
});

app.post("/", (req, res) => {
  res.send("You send a post request");
});
