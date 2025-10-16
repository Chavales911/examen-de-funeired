
const saludo = document.getElementById("saludo");
const guardado = localStorage.getItem("nombreUsuario");
if (guardado) {
  saludo.textContent = "Hola de nuevo, " + guardado + "!";
}


document.querySelector("button").onclick = function() {

  let nombre = document.getElementById("nombre");
  let email = document.getElementById("email");
  let edad = document.getElementById("edad");
  let pais = document.getElementById("pais");
  let msg = document.getElementById("mensaje");

  nombre.classList.remove("error");
  email.classList.remove("error");
  edad.classList.remove("error");
  pais.classList.remove("error");
  msg.textContent = "";
  msg.style.color = "";


  if (
    nombre.value.trim().length === 0 ||
    email.value.trim().length === 0 ||
    edad.value.trim().length === 0 ||
    pais.value.trim().length === 0
  ) {
    msg.textContent = "Por favor, completa todos los campos.";
    msg.style.color = "red";

    if (nombre.value.trim().length === 0) nombre.classList.add("error");
    if (email.value.trim().length === 0) email.classList.add("error");
    if (edad.value.trim().length === 0) edad.classList.add("error");
    if (pais.value.trim().length === 0) pais.classList.add("error");
    return;
  }


  let edadNum = parseInt(edad.value);
  if (isNaN(edadNum) || edadNum < 18 || edadNum > 99) {
    msg.textContent = "La edad debe estar entre 18 y 99.";
    msg.style.color = "red";
    edad.classList.add("error");
    return;
  }


  localStorage.setItem("nombreUsuario", nombre.value.trim());


  msg.textContent = "Formulario enviado correctamente.";
  msg.style.color = "green";

 
  nombre.value = "";
  email.value = "";
  edad.value = "";
  pais.value = "";
};


