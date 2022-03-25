const asyncHandler = require('express-async-handler')
const DB = require('../database/models')
const fs = require('fs')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')

module.exports = {
    renderRegister: (req, res) => {
        res.render('auth/register')
    },
    register: asyncHandler(async (req, res) => {
        let errors = validationResult(req)
        const { first_name, last_name, email, user_name, password} = req.body
        const image = typeof req.file !== 'undefined' ? req.file.filename : 'default.jpg'
        const user = {
            first_name,
            last_name,
            email,
            user_name,
            password: await bcrypt.hash(password, 10),
            image,
            category_id: 3
        }

        
        if(errors.isEmpty()){
            const newUser = await DB.Users.create(user)
            res.redirect('/auth/login')
        }else{
            // console.log(errors.mapped())
            res.render('auth/register', {errors: errors.mapped(), old: req.body})
        }

    }),
    renderLogin: (req, res) => {
        res.render('auth/login')
    },
    login: asyncHandler(async (req, res) => {
        let errors = validationResult(req)
        const { email, password } = req.body
        const user = await DB.Users.findOne({
            where: {
                email
            }
        })

        if(errors.isEmpty()){
            if(user){
                if(bcrypt.compareSync(password, user.password)){
                    req.session.user = user.email
                    
                    // console.log(req.body.remember)
                    if(req.body.remember){
                        res.cookie('user', user.email, { maxAge: 1000 * 60 * 5 })
                    }
    
                    res.redirect('/')
                }
            }
        }else{
            res.render('auth/login', {errors: errors.mapped(), old: req.body})
        }
    }),
    logout: (req, res) => {
        req.session.destroy()
        res.clearCookie('user')
        res.redirect('/')
    },
    renderProfile: asyncHandler(async (req, res) => {
        const userEmail = req.session.user ? req.session.user : null
        if(userEmail){
            const user = await DB.Users.findOne({
                where: {
                    email: userEmail
                }
            })
            return res.render('auth/profile', { user })
        }else{
            res.redirect('/auth/login')
        }
    }),
}