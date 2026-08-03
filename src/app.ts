import express from 'express';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// config view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/hoidanit", (req, res) => {
  res.send("Hello HoiDanit!");
});

app.get("/abc", (req, res) => {
  res.send("Hello abc!");
});

app.listen(PORT, () => {
  console.log(`My app is running on port: ${PORT}`);
})   