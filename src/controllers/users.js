const path = require("path");
const db = require("../database");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const { validationResult } = require("express-validator");

const userController = {
  renderLogin: (req, res) => {
    res.render("login");
  },
  renderRegister: (req, res) => {
    res.render("register");
  },
  renderProfile: (req, res) => {
    const userData = req.session.user;
    res.render("profile", { user: userData });
  },
  register: (req, res) => {
    const users = db.users.select();
    const user = users.find((user) => user.email === req.body.email);
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("register", {
        errors: resultValidation.mapped(),
        old: req.body,
      });
    }
    if (!user) {
      const image = req.file ? req.file.filename : null;
      const user = {
        id: uuidv4(),
        firstName: req.body.nombres,
        lastName: req.body.apellidos,
        email: req.body.email,
        user: req.body.usuario,
        password: bcrypt.hashSync(req.body.password),
        category: "usuario",
        image,
      };
      db.users.insert(user);
      res.redirect("/users/login");
    } else {
      const image = req.file ? req.file.filename : null;
      if (image) {
        fs.unlinkSync(path.join(__dirname, "../public/images/users/", image));
      }
      const old = req.body;
      res.render("register", { msg: "El usuario ya existe", old });
    }
  },
  login: (req, res) => {
    const user = db.users.selectByField("email", req.body.email);
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        req.session.user = user;

        if (req.body.remember != undefined) {
          res.cookie("user", user.email, { maxAge: 1000 * 60 * 90 });
        }

        res.redirect("/");
      } else {
        res.render("login", { msg: "Contraseña incorrecta" });
      }
    } else {
      res.render("login", { msg: "Email o contraseña incorrecta" });
    }
  },
  logout: (req, res) => {
    res.clearCookie("user");
    req.session.destroy();
    res.redirect("/users/login");
  },
};

module.exports = userController;