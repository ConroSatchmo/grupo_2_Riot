window.addEventListener("load", function () {
  let formulario = document.querySelector("form.formulario");

  formulario.addEventListener("submit", function (event) {
    const email = document.querySelector("input#email").value;
    const password = document.querySelector("input#password").value;

    const errores = [];

    if (email === "") {
      errores.push("Debes completar el email");
    }
    if (password === "") {
      errores.push("Debes completar la contraseña");
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
