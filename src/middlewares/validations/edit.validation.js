const path = require("path")
const { check } = require("express-validator")

module.exports = [
    check("name")
        .notEmpty()
        .withMessage("Ingrese el nombre del producto")
        .bail()
        .isLength({ min: 2 })
        .withMessage("El nombre debe tener al menos 2 caracteres"),
    check("description")
        .notEmpty()
        .withMessage("Ingrese la descripcion del producto")
        .bail()
        .isLength({ min: 2 })
        .withMessage("La descripcion debe tener al menos 2 caracteres"),
    check("price")
        .notEmpty()
        .withMessage("Ingrese el precio del producto")
        .bail()
        .isNumeric()
        .withMessage("El precio debe ser un numero"),
    check("color")
        .notEmpty()
        .withMessage("Ingrese el color del producto"),
    check("brand")
        .notEmpty()
        .withMessage("Ingrese la marca del producto"),
    check("images")
        .custom((value, { req }) => {
            if (req.files.length <= 4) {
                return true;
            }
            return false;
        })
        .withMessage("Solo se permite subir 4 imagenes")
        .bail()
        .custom((value, { req }) => {
            const images = req.files
            for(let i = 0; i < images.length; i++){
                if(images[i].mimetype !== "image/jpeg" && images[i].mimetype !== "image/png"){
                    for(let j = 0; j < images.length; j++){
                        fs.unlinkSync(path.join(__dirname, "../../../public/images/products/", images[j].filename))
                    }
                    return false
                }
            }
            return true
        })
        .withMessage("Solo se permite subir imagenes con extensiones .png, .jpg o .jpeg"),
]