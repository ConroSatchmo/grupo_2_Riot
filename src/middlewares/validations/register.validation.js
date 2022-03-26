const path = require("path")
const { check } = require("express-validator")
const asyncHandler = require('express-async-handler')
const DB = require("../../database/models")

module.exports = [
    check('first_name')
        .notEmpty()
        .withMessage('Ingrese su nombre')
        .bail()
        .isLength({ min: 2 })
        .withMessage('El nombre debe tener al menos 2 caracteres'),
    check('last_name')
        .notEmpty()
        .withMessage('Ingrese su apellido')
        .bail()
        .isLength({ min: 2 })
        .withMessage('El apellido debe tener al menos 2 caracteres'),
    check('email')
        .notEmpty()
        .withMessage('Ingrese su email')
        .bail()
        .isEmail()
        .withMessage('Ingrese un email valido')
        .bail()
        .custom(asyncHandler(async (value, { req }) => {
            const user = await DB.Users.findOne({
                where: {
                    email: value
                }
            })
            if(user){
                throw new Error('El email ya esta registrado')
            }
        })),
    check('user_name')
        .notEmpty()
        .withMessage('Ingrese su nombre de usuario')
        .bail()
        .isLength({ min: 2 })
        .withMessage('El nombre de usuario debe tener al menos 2 caracteres'),
    check('password')
        .notEmpty()
        .withMessage('Ingrese su contraseña')
        .bail()
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener al menos 8 caracteres')
        .bail()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i")
        .withMessage('La contraseña debe tener al menos una mayuscula, una minuscula, un caracter especial y un numero'),
    check('image')
        // .custom((value, { req }) => {
        //     if (req.file) {
        //         return true;
        //     }
        //     return false;
        // })
        // .withMessage('Seleccione una imagen')
        // .bail()
        .custom((value, { req }) => {
            if (req.file) {
                const ext = path.extname(req.file.originalname).toLowerCase();
                if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
                    return true;
                }
            }
            return false;
        })
        .withMessage('Solo se permiten imagenes con extensiones .png, .jpg o .jpeg'),
]

