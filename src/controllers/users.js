const path = require("path");

const userController = {
  renderLogin: (req, res) => {
    res.render("login");
  },
  renderRegister: (req, res) => {
    res.render("register");
  },
};

module.exports = userController;
