const db = require('../database/models');

const recordame = async (req, res, next) => {
    next();

    if (req.cookies.recordame != undefined && req.session.user == undefined) {
        const user = await db.Users.findOne({
            where: {
                email: req.cookies.recordame
            }
        });
        req.session.user = user;
    }
}

module.exports = recordame;