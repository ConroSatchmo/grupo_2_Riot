const db = require('../database/models');

const auth = async (req, res, next) => {
    res.locals.isLogged = false;

	let emailInCookie = req.cookies.user;
    // console.log(emailInCookie);
	
    // console.log(userFromCookie);

	if (emailInCookie != undefined) {
		let userFromCookie = await db.Users.findOne({
			where: {
				email: emailInCookie
			}
		});
		if(userFromCookie){
			req.session.user = userFromCookie;
		}
	}

	if (req.session.user) {
		res.locals.isLogged = true;
		res.locals.user = req.session.user;
	}

	next();
}

module.exports = auth;