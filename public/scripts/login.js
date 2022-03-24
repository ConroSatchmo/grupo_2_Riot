window.addEventListener("load", function () {
  let formulario = document.querySelector("form.formulario");
  console.log(formulario);

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.querySelector("input#email").value;
    const password = document.querySelector("input#password").value;

    if (email === "") {
      alert("Debes completar el email");
    }

    if (password === "") {
      alert("Debes completar la contraseña");
    }
  });
});
