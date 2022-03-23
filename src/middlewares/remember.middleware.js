const asyncHandler = require('express-async-handler')
const DB = require('../database/models')

module.exports = asyncHandler(async (req, res, next) => {
    next();

    if (req.cookies.user != undefined && req.session.user == undefined) {
        const user = await DB.Users.findOne({
            where: {
                email: req.cookies.user
            }
        });

        req.session.user = user.email;
        console.log(req.session.user)
    }
})