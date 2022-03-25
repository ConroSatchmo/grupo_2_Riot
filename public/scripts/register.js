window.addEventListener("load", function () {
  let btnSubmit = document.querySelector("#btnSubmit");
  let inputFirstName = document.querySelector("input#first_name");
  let inputLastName = document.querySelector("input#last_name");
  let inputEmail = document.querySelector("input#email");
  let inputUserName = document.querySelector("input#user_name");
  let inputPassword = document.querySelector("input#password");
  let typeImage = document.querySelector("input#image").files[0].type;
  let erFirstName = document.querySelector(".erFirstName");
  let erLastName = document.querySelector(".erLastName");
  let erEmail = document.querySelector(".erEmail");
  let erUserName = document.querySelector(".erUserName");
  let erPassword = document.querySelector(".erPassword");
  let erImage = document.querySelector(".erImage");
  let formulario = document.querySelector("form.formulario");
  let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

    if (inputFirstName.value.length < 1) {
      errores.first_name = "Debes completar el nombre";
    }
    if (inputFirstName.value.length < 2) {
      errores.first_name = "El nombre debe tener al menos 2 caracteres";
    }
    if (inputLastName.value.length < 1) {
      errores.last_name = "Debes completar el apellido";
    }
    if (inputLastName.value.length < 2) {
      errores.last_name = "El apellido debe tener al menos 2 caracteres";
    }
    if (inputEmail.value.length < 1) {
      errores.email = "Debes completar el email";
    }

    if (inputEmail.value.match(validEmailRegex)) {
      errores.email = "Debes ingresar un email válido";
    }
    if (inputUserName.value.length < 1) {
      errores.user_name = "Debes completar el nombre de usuario";
    }
    if (inputUserName.value.length < 2) {
      errores.user_name =
        "El nombre de usuario debe tener al menos 2 caracteres";
    }
    if (inputPassword.value.length < 1) {
      errores.pass = "Debes completar la contraseña";
    }
    if (inputPassword.value.length < 8) {
      errores.pass = "La contraseña debe tener al menos 8 caracteres";
    }
    if (
      inputPassword.value.matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        "i"
      )
    ) {
      errores.pass =
        "La contraseña debe tener al menos una mayúscula, una minúscula, un caracter especial y un número";
    }
    if (allowedExtension.indexOf(typeImage) == -1) {
      errores.image = "La imagen debe ser una imagen válida";
    }

    if (Object.keys(errores).length >= 1) {
      erFirstName.innerHTML = errores.first_name ? errores.first_name : "";
      erLastName.innerHTML = errores.last_name ? errores.last_name : "";
      erEmail.innerHTML = errores.email ? errores.email : "";
      erUserName.innerHTML = errores.user_name ? errores.user_name : "";
      erPassword.innerHTML = errores.pass ? errores.pass : "";
      erImage.innerHTML = errores.image ? errores.image : "";
    } else {
      formulario.submit();
    }
  });
});
