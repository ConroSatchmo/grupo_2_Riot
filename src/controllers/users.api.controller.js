const asyncHandler = require("express-async-handler")
const DB = require("../database/models")

module.exports = {
    get: asyncHandler(async (req, res) => {
        const usersDB = await DB.Users.findAll()
        let users = usersDB.map(user => ({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            user_name: user.user_name,
            deatil: '/api/users/' + user.id,
        }))


        res.status(200).json({
            count: users.length,
            data: users
        })
    }),
    getById: asyncHandler(async (req, res) => {
        const id = req.params.id
        const user = await DB.Users.findByPk(id)
        res.status(200).json({
            data: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                user_name: user.user_name,
                image: 'http://localhost:3000/images/users/' + user.image,
            }
        })
    })
}