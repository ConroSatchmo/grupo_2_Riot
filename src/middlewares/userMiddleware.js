const user = (req, res, next) => {
    if (req.session.user) {
        return res.redirect('/users/profile');
    }
    next();
}

module.exports = user;