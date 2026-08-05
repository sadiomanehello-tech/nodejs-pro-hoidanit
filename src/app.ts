import express from 'express';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// config view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

//config routes
import webRoutes from './routes/web';
webRoutes(app);

// config static files
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`My app is running on port: ${PORT}`);
})   