const express = require("express");
const app = express();
const path = require("path");

// Setting
app.set("port", process.env.PORT || 3000);
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware

// Routes
const homeRouter = require("./routes/home");
app.use('/', homeRouter);

const authRouter = require("./routes/auth");
app.use('/auth', authRouter);

const productDetailRouter = require("./routes/productDetail");
app.use('/productDetail', productDetailRouter);

const productCartRouter = require("./routes/productCart");
app.use('/productCart', productCartRouter);

// Static
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

module.exports = app;

// app.get("/register", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./views/register.html"));
// });
// app.get("/login", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./views/login.html"));
// });

// app.get("/productDetail", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
// });

// app.get("/productCart", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
// });
