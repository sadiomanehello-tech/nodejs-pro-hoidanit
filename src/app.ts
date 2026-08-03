import express from 'express';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!, nodemon");
});

app.get("/hoidanit", (req, res) => {
  res.send("Hello HoiDanit!");
});

app.listen(PORT, () => {
  console.log(`My app is running on port: ${PORT}`);
  console.log("env PORT:", process.env.PORT);
})   