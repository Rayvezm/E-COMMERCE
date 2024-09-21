// Escucha el contenedor padre (event delegation)
document
  .getElementById('imageContainer')
  .addEventListener('click', function (event) {
    // Verifica si el clic fue en una imagen
    if (event.target.tagName === 'IMG') {
      // Extrae la imagen clicada
      const imageSrc = event.target.src;

      // Navega al contenedor padre de la imagen para obtener el título y subtítulo
      const carouselItem = event.target.closest('.carousel-item'); // Encuentra el contenedor más cercano con clase 'carousel-item'
      const title = carouselItem.querySelector(".carousel-title").textContent; // Encuentra el título
      const subTitle = carouselItem.querySelector(".carousel-subtitle").textContent; // Encuentra el subtítulo

      // Establece el contenido de la modal
      document.getElementById('imageModalLabel').textContent = `${title} - ${subTitle}`; // Mostrar título y subtítulo en el modal
      document.getElementById('modalImage').src = imageSrc;

      // Muestra la modal
      const myModal = new bootstrap.Modal(
        document.getElementById('imageModal')
      );
      myModal.show();
    }
  });
