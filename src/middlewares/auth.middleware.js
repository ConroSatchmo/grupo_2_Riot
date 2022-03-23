const asyncHandler = require('express-async-handler')
const DB = require('../database/models')

module.exports = asyncHandler(async (req, res, next) => {
    if(!req.session.user){
        return res.redirect('/auth/login')
    }

    next()
    // const user = await DB.Users.findOne({
    //     where: {
    //         email: req.session.user
    //     },
    //     include: [
    //         { association: "categories" }
    //     ]
    // })

    // if(user.categories.name == "Usuario"){
    //     next()
    // }else{
    //     return res.redirect('/')
    // }

})