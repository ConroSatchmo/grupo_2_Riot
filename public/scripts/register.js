window.addEventListener("load", function () {
  let formulario = document.querySelector("form.formulario");

  formulario.addEventListener("submit", function (event) {
    const firstName = document.querySelector("input#first_name").value;
    const lastName = document.querySelector("input#last_name").value;
    const email = document.querySelector("input#email").value;
    const emailType = document.querySelector("select#email").type;
    const userName = document.querySelector("input#user_name").value;
    const password = document.querySelector("input#password").value;
    const imageType = document.querySelector("input#image").type;

    const errores = [];

    if (firstName === "") {
      errores.push("Debes completar tu nombre");
    }
    if (firstName.length < 2) {
      errores.push("Tu nombre debe tener al menos 2 caracteres");
    }
    if (lastName === "") {
      errores.push("Debes completar tu apellido");
    }
    if (lastName.length < 2) {
      errores.push("Tu apellido debe tener al menos 2 caracteres");
    }
    if (email === "") {
      errores.push("Debes completar el email");
    }
    if (emailType === "email") {
      errores.push("Debes ingresar un email valido");
    }
    if (userName === "") {
      errores.push("Debes completar el nombre de usuario");
    }
    if (userName.length < 2) {
      errores.push("Tu nombre de usuario debe tener al menos 2 caracteres");
    }
    if (password === "") {
      errores.push("Debes completar la contraseña");
    }
    if (password.length < 8) {
      errores.push("Tu contraseña debe tener al menos 8 caracteres");
    }
    if (
      password.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
    ) {
      errores.push(
        "Tu contraseña debe tener al menos una mayuscula, una minuscula, un caracter especial y un numero"
      );
    }
    if (imageType === "file") {
      errores.push("Debes subir una imagen válida");
    }

    if (errores.length > 0) {
      event.preventDefault();
      let ulerrores = document.querySelector("div.errores ul");
      for (let i = 0; i < errores.length; i++) {
        ulerrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
