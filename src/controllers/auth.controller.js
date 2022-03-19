const asyncHandler = require('express-async-handler')
const DB = require('../database/models')
const fs = require('fs')
const bcrypt = require('bcryptjs')

module.exports = {
    renderRegister: (req, res) => {
        res.render('auth/register')
    },
    register: asyncHandler(async (req, res) => {
        const { first_name, last_name, email, user_name, password} = req.body
        console.log(req.file)
        const image = typeof req.file !== 'undefined' ? req.file.filename : 'default.jpg'
        const user = {
            first_name,
            last_name,
            email,
            user_name,
            password: await bcrypt.hash(password, 10),
            image,
            category_id: 1
        }

        const newUser = await DB.Users.create(user)

        res.redirect('/auth/login')
    }),
    renderLogin: (req, res) => {
        res.render('auth/login')
    },
    login: asyncHandler(async (req, res) => {
        const { email, password } = req.body
        const user = await DB.Users.findOne({
            where: {
                email
            }
        })

        if(user){
            if(bcrypt.compareSync(password, user.password)){
                req.session.user = user.email

                if(req.body.remember != undefined){
                    res.cookie('user', user, { maxAge: 1000 * 60 })
                }

                res.redirect('/')
            }else{
                res.render('auth/login', {
                    error: 'Contraseña incorrecta'
                })
            }
        }else{
            res.render('auth/login', {
                error: 'Email o contraseña incorrecta'
            })
        }
    }),
    logout: (req, res) => {
        req.session.destroy()
        res.clearCookie('user')
        res.redirect('/')
    }
}