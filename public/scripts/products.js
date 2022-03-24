window.addEventListener("load", function () {
  let formulario = document.querySelector("form.formulario");

  formulario.addEventListener("submit", function (event) {
    const name = document.querySelector("input#name").value;
    const description = document.querySelector("input#description").value;
    const imageType = document.querySelector("input#image").type;

    const errores = [];

    if (name === "") {
      errores.push("Debes completar el nombre del producto");
    }
    if (name.length < 5) {
      errores.push("El nombre del producto debe tener al menos 5 caracteres");
    }
    if (description.length < 20) {
      errores.push("La descripción debe tener al menos 20 caracteres");
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
