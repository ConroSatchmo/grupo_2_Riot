const path = require("path")
const { check } = require("express-validator")
const asyncHandler = require('express-async-handler')
const DB = require("../../database/models")
const bcrypt = require('bcryptjs')

module.exports = [
    check('email')
        .notEmpty()
        .withMessage('Ingrese su email')
        .bail()
        // .isEmail()
        // .withMessage('Ingrese un email valido')
        // .bail()
        .custom(asyncHandler(async (value, { req }) => {
            const user = await DB.Users.findOne({
                where: {
                    email: req.body.email
                }
            })
            if(!user){
                throw new Error('El email no esta registrado')
            }
        })),
    check('password')
        .notEmpty()
        .withMessage('Ingrese su contraseña')
        .bail()
        // .isLength({ min: 8 })
        // .withMessage('La contraseña debe tener al menos 8 caracteres')
        // .bail()
        // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
        // .withMessage('La contraseña debe tener al menos una mayuscula, una minuscula, un caracter especial y un numero')
        // .bail()
        .custom(asyncHandler(async (value, { req }) => {
            const user = await DB.Users.findOne({
                where: {
                    email: req.body.email
                }
            })
            if(user){
                const isMatch = await bcrypt.compare(value, user.password)
                if(!isMatch){
                    throw new Error('La contraseña es incorrecta')
                }
            }
        })),
]