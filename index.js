const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");

// Setting
app.set("port", 3000);

// Middleware

// Routes
app.use(require("./routes/index"));

// Static
app.use(express.static(publicPath));
// app.use(express.json);
// app.use(urlencoded({ extended: true }));

module.exports = app;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
app.get("/carrito", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
});
// app.post("/register", (req, res) => {
//   console.log(req.body);
//   res.sendFile(path.resolve(__dirname, "./views/register.html"));
// });
// app.post("/login", (req, res) => {
//   console.log(req.body);
//   res.sendFile(path.resolve(__dirname, "./views/login.html"));
// });
