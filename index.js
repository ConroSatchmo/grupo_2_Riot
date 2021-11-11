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

module.exports = app;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});
