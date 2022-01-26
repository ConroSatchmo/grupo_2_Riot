const db = require('../database');

const recordame = (req, res, next) => {
    next();

    if (req.cookies.recordame != undefined && req.session.user == undefined) {
        const user = db.users.selectByField('email', req.cookies.recordame);
        req.session.user = user;
    }
}

module.exports = recordame;