const db = require('../database');

const auth = (req, res, next) => {
    res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	let userFromCookie = db.users.selectByField('email', emailInCookie);

	if (userFromCookie) {
		req.session.user = userFromCookie;
	}

	if (req.session.user) {
		res.locals.isLogged = true;
		res.locals.user = req.session.user;
	}

	next();
}

module.exports = auth;