const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "Imtiaz",
    content: "I love coding",
  },
  {
    username: "Kazim",
    content: "Hard working is necessary for success",
  },
  {
    username: "Rafeeq",
    content: "I got selected for my 1st internship",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
  console.log("Listening to port : 8080");
});
