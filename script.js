// alert("Hola este es mi Javascript");
// let nombre = "Martha";
// nombre = "Maria";
// var nombre1 = "Martha";
// const nombre2 = "Martha";

// let minombre = "Francisco";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);
// console.log(minombre);

let contenidoTitulo = "Nombre1";

let titulo = document.querySelector(".logo");
titulo.innerHTML = contenidoTitulo;

// CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre1") {
  titulo.innerHTML = "Otro";
} else {
  console.log(" no se cumple");
}

// FUNCIONES

let nombre1 = "Frank";
let ciudad = "Lakewood";
let gusto = " NFL";

let parrafo = document.querySelector(".parrafo2");

function cambiartexto(nombre1, ciudad, gusto) {
  let contenido = `Mi nombre es ${nombre1} Silva Gomez, soy de  ${ciudad} y vivo en la
    capital de Managua, Me gustan el ${gusto}, ver series,
    salir a pasear con mi hija. Aunque estudié Ing en Sistemas, nunca
    ejerce la carrera siempre quise poder practicar la programación,
    ahora con este curso en EGG, podre darle paso a este anhelo.`;

  return contenido;
}

parrafo.innerText = cambiartexto(nombre1, ciudad, gusto);

//ESTO ES PARA LA PARTE DEL FORMULARIO

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
