window.addEventListener("load", function () {
  let btnSubmit = document.querySelector("#btnSubmit");
  let inputName = document.querySelector("input#name");
  let inputDescription = document.querySelector("input#description");
  let typeImage = document.querySelector("input#image").files[0].type;
  let erName = document.querySelector(".erName");
  let erDescription = document.querySelector(".erDescription");
  let erImage = document.querySelector(".erImage");
  let formulario = document.querySelector("form.formulario");
  let allowedExtension = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/bmp",
  ];
  btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    let errores = {};

    if (inputName.value.length < 1) {
      errores.name = "Debes completar el nombre del producto";
    }
    if (inputName.value.length < 5) {
      errores.name = "El nombre del producto debe tener al menos 5 caracteres";
    }
    if (inputDescription.value.length < 20) {
      errores.description = "La descripción debe tener al menos 20 caracteres";
    }
    if (
      typeImage !== allowedExtension[0] &&
      typeImage !== allowedExtension[1] &&
      typeImage !== allowedExtension[2] &&
      typeImage !== allowedExtension[3] &&
      typeImage !== allowedExtension[4]
    ) {
      errores.image = "Debes subir una imagen válida";
    }

    if (!inputEmail.value.match(validEmailRegex)) {
      errores.email = "Debes ingresar un email válido";
    }

    if (inputPassword.value.length < 1) {
      errores.pass = "Debes completar la contraseña";
    }

    if (Object.keys(errores).length >= 1) {
      erName.innerHTML = errores.name ? errores.name : "";
      erDescription.innerHTML = errores.description ? errores.description : "";
      erImage.innerHTML = errores.image ? errores.image : "";
    } else {
      formulario.submit();
    }
  });
});
