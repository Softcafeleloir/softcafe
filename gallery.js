// En el archivo gallery.js

// Obtener todas las imágenes de la galería
const images = document.querySelectorAll('.gallery img');

// Agregar un event listener a cada imagen
images.forEach(image => {
    image.addEventListener('click', function() {
        // Crear un nuevo elemento de imagen para la versión ampliada
        const expandedImage = document.createElement('img');
        // Establecer la fuente de la imagen ampliada como la fuente de la imagen clicada
        expandedImage.src = this.src;
        // Crear un contenedor para la imagen ampliada y estilizarlo
        const modal = document.createElement('div');
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        // Agregar la imagen ampliada al contenedor modal
        modal.appendChild(expandedImage);
        // Agregar el contenedor modal al documento
        document.body.appendChild(modal);
        addEventListener 
        // Agregar un event listener para cerrar el modal cuando haces clic en él
        modal.addEventListener('click', function() {
            document.body.removeChild(this);
        });
    });
});
