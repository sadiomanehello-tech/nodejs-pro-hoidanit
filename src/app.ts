import express from 'express';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`<h1 style="color: red;">Hello HoiDanit!</h1>`);
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