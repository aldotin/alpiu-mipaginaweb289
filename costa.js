
    // Lista de imágenes
    const imagenes = [
"costa/beba.jpg",
"costa/chi.jpg",
"costa/gas.jpg",
"costa/jay.jpg",
"costa/ñaña.jpg",
"costa/ñiñi.jpg",
"Costa/oño.jpg",
"costa/opo.jpg",
"costa/tare.jpg",
      "costa/trio.jpg"
  
  
  
    ];

    let indice = 0;
    const img = document.getElementById("imagen");

    function mostrarSiguienteFoto() {
      // Cambiar la imagen con opacidad
      img.style.opacity = 0;

      setTimeout(() => {
        img.src = imagenes[indice];
        img.style.opacity = 1;

        indice = (indice + 1) % imagenes.length; // volver al inicio al final
      }, 500);
    }

    // Mostrar la primera imagen al cargar
    mostrarSiguienteFoto();

    // Cambiar imagen cada 3 segundos
    setInterval(mostrarSiguienteFoto, 3000);
  