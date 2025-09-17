// Lista de imágenes (ojo con mayúsculas: "Sierra")
const imagenes = [
  "Sierra/caguey.jpg",
  "Sierra/losey.jpg",
  "Sierra/monsey.jpg",
  "Sierra/rochey.jpg",
  "Sierra/tibua.jpg"
];

let indice = 0;
const img = document.getElementById("imagen");

function mostrarSiguienteFoto() {
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = imagenes[indice];
    img.style.opacity = 1;

    indice = (indice + 1) % imagenes.length;
  }, 500);
}

// Cambiar imagen cada 3 segundos
setInterval(mostrarSiguienteFoto, 3000);

