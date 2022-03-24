const asyncHandler = require('express-async-handler')
const DB = require('../database/models')

module.exports = asyncHandler(async (req, res, next) => {
    // console.log(req.cookies.user) 

    // if(req.cookies.user === 'no remember'){
    //     req.session.user = undefined
    // }

    if(req.cookies.user && req.session.user) {
        const user = await DB.Users.findOne({
            where: {
                email: req.cookies.user
            }
        });
        
        req.session.user = user.email;
        // console.log('entro')
    }

    next();
})