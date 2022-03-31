window.addEventListener("load", function () {
  let inputName = document.getElementById("name");
  let inputDescription = document.getElementById("description");
  let inputImage = document.getElementById("image");
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
  formulario.addEventListener("submit", function (event) {
    event.stopPropagation();
    event.preventDefault();
    console.log(inputImage);
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
    if (inputImage.files.length > 0) {
      if (
        inputImage.files[0].type !== allowedExtension[0] &&
        inputImage.files[0].type !== allowedExtension[1] &&
        inputImage.files[0].type !== allowedExtension[2] &&
        inputImage.files[0].type !== allowedExtension[3] &&
        inputImage.files[0].type !== allowedExtension[4]
      ) {
        errores.image = "Debes subir una imagen válida";
      }
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
