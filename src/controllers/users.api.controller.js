const asyncHandler = require("express-async-handler");
const DB = require("../database/models");

module.exports = {
  get: asyncHandler(async (req, res) => {
    if (!req.query.pag) {
      const usersDB = await DB.Users.findAll();
      let users = usersDB.map((user) => ({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        user_name: user.user_name,
        detail: "/api/users/" + user.id,
      }));

      res.status(200).json({
        count: users.length,
        data: users,
      });
    } else {
      const page = req.query.pag;
      const limit = !req.query.limit ? "10" : req.query.limit;

      if (!page.match(/^\s*?[0-9]{1,}\s*$/)) {
        return res.status(400).json({
          message: "Page debe ser un número o un número positivo",
        });
      }
      if (!limit.match(/^\s*?[0-9]{1,}\s*$/)) {
        return res.status(400).json({
          message: "Limit debe ser un número o un número positivo",
        });
      }

      const usersDB = await DB.Users.findAll();
      let users = usersDB.map((user) => ({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        user_name: user.user_name,
        detail: "/api/users/" + user.id,
      }));

      const totalPages = Math.ceil(users.length / limit);
      const paginatedUsers = users.slice((page - 1) * limit, page * limit);

      res.status(200).json({
        count: paginatedUsers.length,
        totalPages: totalPages,
        currentPage: Number(page),
        data: paginatedUsers,
      });
    }
  }),
  getById: asyncHandler(async (req, res) => {
    const id = req.params.id;
    const user = await DB.Users.findByPk(id);
    res.status(200).json({
      data: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        user_name: user.user_name,
        image: "http://localhost:3000/images/users/" + user.image,
      },
    });
  }),
};
