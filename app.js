// Este código tiene como objetivo fortalecer las habilidades lógicas para la resolución de problemas mediante la manipulación de listas y el DOM.

let listaAmigos = []; // Arreglo para almacenar los nombres de amigos

/**
 * Agrega un nuevo amigo al array de listaAmigos.
 * Valida que el nombre no esté vacío antes de agregarlo y actualiza la lista visual.
 */
function agregarAmigo() { // Agrega a nuevos amigos
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Nombre inválido, intente de nuevo");
  } else {
    listaAmigos.push(nombreAmigo);
    document.getElementById("amigo").value = "";
    mostrarListaAmigos();
  }
}

/**
 * Permite mostrar en HTML lista de amigos
 */
function mostrarListaAmigos() {
  let contenedorLista = document.querySelector("#listaAmigos");
  contenedorLista.innerHTML = "";

  listaAmigos.forEach(function(amigo) {
    let elementoLista = document.createElement("li");
    elementoLista.textContent = amigo;
    contenedorLista.appendChild(elementoLista);
  });
}

/**
 * Realiza función aleatoria
 */
function sortearAmigo() {
  let totalAmigos = listaAmigos.length;

  if (totalAmigos === 0) {
    alert("Agregue un nombre antes de iniciar");
  } else {
    let indiceAleatorio = Math.floor(Math.random() * totalAmigos);
    document.querySelector("#resultadoSorteo").textContent = listaAmigos[indiceAleatorio];
  }
}
