const asyncHandler = require('express-async-handler')
const DB = require('../database/models')

module.exports = asyncHandler(async (req, res, next) => {
    
    if(!req.session.user){
        res.redirect('/auth/login')
    }

    next()
})