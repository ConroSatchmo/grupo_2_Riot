function $(id) {
  return document.querySelector(id);
}

const form = $("#register-form");
const firstName = $("#first_name");
const lastName = $("#last_name");
const email = $("#email");
const username = $("#user_name");
const password = $("#password");
const image = $("#image");

let firstNameV = $("#V-firstname");
let lastNameV = $("#V-lastname");
let emailV = $("#V-email");
let usernameV = $("#V-username");
let passwordV = $("#V-password");
let imageV = $("#V-image");

let errors = {};

firstName.addEventListener("blur", (e) => {
  if (firstName.value.length < 3) {
    if (firstName.value.length == 0) {
      errors["firstName"] = "El campo no puede estar vacío";
      firstName.classList.add("border-danger");
      firstName.classList.remove("shadow-danger");
      firstNameV.innerHTML = errors.firstName;
    } else {
      errors["firstName"] = "El campo debe tener al menos 3 caracteres";
      firstName.classList.add("border-danger");
      firstName.classList.remove("shadow-danger");
      firstNameV.innerHTML = errors.firstName;
    }
  } else {
    errors["firstName"] = null;
    firstName.classList.remove("border-danger");
    firstName.classList.remove("shadow-danger");
  }
});
firstName.addEventListener("focus", (e) => {
  if (firstName.value.length < 3) {
    firstName.classList.add("border-danger");
    firstName.classList.add("shadow-danger");
  } else {
    firstName.classList.remove("border-danger");
    firstName.classList.remove("shadow-danger");
  }
});
firstName.addEventListener("keyup", (e) => {
  if (firstName.value.length < 3) {
    if (firstName.value.length == 0) {
      errors["firstName"] = "El campo no puede estar vacío";
      firstName.classList.add("border-danger");
      firstName.classList.add("shadow-danger");
      firstNameV.innerHTML = errors.firstName;
    } else {
      errors["firstName"] = "El campo debe tener al menos 3 caracteres";
      firstName.classList.add("border-danger");
      firstName.classList.add("shadow-danger");
      firstNameV.innerHTML = errors.firstName;
    }
  } else {
    errors["firstName"] = null;
    firstName.classList.remove("border-danger");
    firstName.classList.remove("shadow-danger");
    firstNameV.innerHTML = errors.firstName;
  }
});

lastName.addEventListener("blur", (e) => {
  if (lastName.value.length < 3) {
    if (lastName.value.length == 0) {
      errors["lastName"] = "El campo no puede estar vacío";
      lastName.classList.add("border-danger");
      lastName.classList.remove("shadow-danger");
      lastNameV.innerHTML = errors.lastName;
    } else {
      errors["lastName"] = "El campo debe tener al menos 3 caracteres";
      lastName.classList.add("border-danger");
      lastName.classList.remove("shadow-danger");
      lastNameV.innerHTML = errors.lastName;
    }
  } else {
    errors["lastName"] = null;
    lastName.classList.remove("border-danger");
    lastName.classList.remove("shadow-danger");
  }
});
lastName.addEventListener("focus", (e) => {
  if (lastName.value.length < 3) {
    lastName.classList.add("border-danger");
    lastName.classList.add("shadow-danger");
  } else {
    lastName.classList.remove("border-danger");
    lastName.classList.remove("shadow-danger");
  }
});
lastName.addEventListener("keyup", (e) => {
  if (lastName.value.length < 3) {
    if (lastName.value.length == 0) {
      errors["lastName"] = "El campo no puede estar vacío";
      lastName.classList.add("border-danger");
      lastName.classList.add("shadow-danger");
      lastNameV.innerHTML = errors.lastName;
    } else {
      errors["lastName"] = "El campo debe tener al menos 3 caracteres";
      lastName.classList.add("border-danger");
      lastName.classList.add("shadow-danger");
      lastNameV.innerHTML = errors.lastName;
    }
  } else {
    errors["lastName"] = null;
    lastName.classList.remove("border-danger");
    lastName.classList.remove("shadow-danger");
    lastNameV.innerHTML = errors.lastName;
  }
});

email.addEventListener("blur", (e) => {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (email.value.length == 0) {
    errors["email"] = "El campo no puede estar vacio";
    email.classList.add("border-danger");
    email.classList.remove("shadow-danger");
    emailV.innerHTML = errors.email;
  } else if (!email.value.match(emailPattern)) {
    errors["email"] = "El email no es valido";
    email.classList.add("border-danger");
    email.classList.remove("shadow-danger");
    emailV.innerHTML = errors.email;
  } else {
    errors["email"] = null;
    email.classList.remove("border-danger");
    email.classList.remove("shadow-danger");
    emailV.innerHTML = errors.email;
  }
});
email.addEventListener("focus", (e) => {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (email.value.length == 0) {
    email.classList.add("border-danger");
    email.classList.add("shadow-danger");
  } else if (!email.value.match(emailPattern)) {
    email.classList.add("border-danger");
    email.classList.add("shadow-danger");
  } else {
    email.classList.remove("border-danger");
    email.classList.remove("shadow-danger");
  }
});
email.addEventListener("keyup", (e) => {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (email.value.length == 0) {
    errors["email"] = "El campo no puede estar vacío";
    email.classList.add("border-danger");
    email.classList.add("shadow-danger");
    emailV.innerHTML = errors.email;
  } else if (!email.value.match(emailPattern)) {
    errors["email"] = "El email no es valido";
    email.classList.add("border-danger");
    email.classList.add("shadow-danger");
    emailV.innerHTML = errors.email;
  } else {
    errors["email"] = null;
    email.classList.remove("border-danger");
    email.classList.remove("shadow-danger");
    emailV.innerHTML = errors.email;
  }
});

username.addEventListener("blur", (e) => {
  if (username.value.length < 3) {
    if (username.value.length == 0) {
      errors["username"] = "El campo no puede estar vacío";
      username.classList.add("border-danger");
      username.classList.remove("shadow-danger");
      usernameV.innerHTML = errors.username;
    } else {
      errors["username"] = "El campo debe tener al menos 3 caracteres";
      username.classList.add("border-danger");
      username.classList.remove("shadow-danger");
      usernameV.innerHTML = errors.username;
    }
  } else {
    errors["username"] = null;
    username.classList.remove("border-danger");
    username.classList.remove("shadow-danger");
  }
});
username.addEventListener("focus", (e) => {
  if (username.value.length < 3) {
    username.classList.add("border-danger");
    username.classList.add("shadow-danger");
  } else {
    username.classList.remove("border-danger");
    username.classList.remove("shadow-danger");
  }
});
username.addEventListener("keyup", (e) => {
  if (username.value.length < 3) {
    if (username.value.length == 0) {
      errors["username"] = "El campo no puede estar vacío";
      username.classList.add("border-danger");
      username.classList.add("shadow-danger");
      usernameV.innerHTML = errors.username;
    } else {
      errors["username"] = "El campo debe tener al menos 3 caracteres";
      username.classList.add("border-danger");
      username.classList.add("shadow-danger");
      usernameV.innerHTML = errors.username;
    }
  } else {
    errors["username"] = null;
    username.classList.remove("border-danger");
    username.classList.remove("shadow-danger");
    usernameV.innerHTML = errors.username;
  }
});

password.addEventListener("blur", (e) => {
  if (
    !password.value.match(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    )
  ) {
    if (password.value.length == 0) {
      errors["password"] = "El campo no puede estar vacío";
      password.classList.add("border-danger");
      password.classList.remove("shadow-danger");
      passwordV.innerHTML = errors.password;
    } else {
      errors["password"] =
        "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un caracter especial y un número";
      password.classList.add("border-danger");
      password.classList.remove("shadow-danger");
      passwordV.innerHTML = errors.password;
    }
  } else {
    errors["password"] = null;
    password.classList.remove("border-danger");
    password.classList.remove("shadow-danger");
    passwordV.innerHTML = errors.password;
  }
});
password.addEventListener("focus", (e) => {
  if (
    !password.value.match(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    )
  ) {
    if (password.value.length == 0) {
      password.classList.add("border-danger");
      password.classList.add("shadow-danger");
    } else {
      password.classList.add("border-danger");
      password.classList.add("shadow-danger");
    }
  } else {
    password.classList.remove("border-danger");
    password.classList.remove("shadow-danger");
  }
});
password.addEventListener("keyup", (e) => {
  if (
    !password.value.match(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    )
  ) {
    if (password.value.length == 0) {
      errors["password"] = "El campo no puede estar vacío";
      password.classList.add("border-danger");
      password.classList.add("shadow-danger");
      passwordV.innerHTML = errors.password;
    } else {
      errors["password"] =
        "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un caracter especial y un número";
      password.classList.add("border-danger");
      password.classList.add("shadow-danger");
      passwordV.innerHTML = errors.password;
    }
  } else {
    errors["password"] = null;
    password.classList.remove("border-danger");
    password.classList.remove("shadow-danger");
    passwordV.innerHTML = errors.password;
  }
});

image.addEventListener("blur", (e) => {
  image.classList.remove("shadow-danger");
});
image.addEventListener("focus", (e) => {
  const type = image.files[0].type;
  if (
    type != "image/png" &&
    type != "image/jpeg" &&
    type != "image/jpg" &&
    type != "image/gif"
  ) {
    image.classList.add("border-danger");
    image.classList.add("shadow-danger");
  } else {
    image.classList.remove("border-danger");
    image.classList.remove("shadow-danger");
  }
});
image.addEventListener("change", (e) => {
  const type = image.files[0].type;
  if (
    type != "image/png" &&
    type != "image/jpeg" &&
    type != "image/jpg" &&
    type != "image/gif"
  ) {
    errors["image"] = "El archivo debe ser una imagen png, jpg, jpeg o gif";
    image.classList.add("border-danger");
    image.classList.add("shadow-danger");
    imageV.innerHTML = errors.image;
  } else {
    errors["image"] = null;
    image.classList.remove("border-danger");
    image.classList.remove("shadow-danger");
    imageV.innerHTML = errors.image;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const errorsV = Object.values(errors).filter((error) => error != null);
  if (errorsV.length < 1) {
    console.log(errorsV);
    form.submit();
  }
});
