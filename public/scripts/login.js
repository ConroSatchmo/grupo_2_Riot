window.addEventListener("load", function () {
  let btnSubmit = document.querySelector("#btnSubmit");
  let inputEmail = document.querySelector("input#email");
  let inputPassword = document.querySelector("input#password");
  let erEmail = document.querySelector(".erEmail");
  let erPassword = document.querySelector(".erPassword");
  let formulario = document.querySelector("form.formulario");
  let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    let errores = {};

    if (inputEmail.value.length < 1) {
      errores.email = "Debes completar el email";
    }

    if (inputEmail.value.match(validEmailRegex)) {
      errores.email = "Debes ingresar un email válido";
    }

    if (inputPassword.value.length < 1) {
      errores.pass = "Debes completar la contraseña";
    }

    if (Object.keys(errores).length >= 1) {
      erEmail.innerHTML = errores.email ? errores.email : "";
      erPassword.innerHTML = errores.pass ? errores.pass : "";
    } else {
      formulario.submit();
    }
  });
});
