const db = require('../database');

const auth = (req, res, next) => {
    res.locals.isLogged = false;

	let emailInCookie = req.cookies.user;
    console.log(emailInCookie);
	let userFromCookie = db.users.selectByField('email', emailInCookie);
    console.log(userFromCookie);

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