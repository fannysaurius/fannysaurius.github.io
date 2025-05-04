const imagen = document.getElementById('imagen');
const width = window.innerWidth;
const height = window.innerHeight;

let posX = Math.random() * (width - 100); // 100 es el ancho de la imagen
let posY = Math.random() * (height - 100); // 100 es el alto de la imagen

let velocidadX = (Math.random() - 0.5) * 4; // Movimiento aleatorio en el eje X
let velocidadY = (Math.random() - 0.5) * 4; // Movimiento aleatorio en el eje Y

// Función para mover la imagen
function moverImagen() {
  posX += velocidadX;
  posY += velocidadY;

  // Rebotar en los bordes de la pantalla
  if (posX <= 0 || posX >= width - 100) {
    velocidadX *= 5; // Cambiar dirección en X
  }
  if (posY <= 0 || posY >= height - 100) {
    velocidadY *= 5; // Cambiar dirección en Y
  }

  // Aplicar las nuevas posiciones
  imagen.style.transform = `translate(${posX}px, ${posY}px)`;

  // Llamar a la función nuevamente para el siguiente frame
  requestAnimationFrame(moverImagen);
}

// Iniciar el movimiento de la imagen
moverImagen();

// Redirigir al hacer clic en la imagen
imagen.addEventListener('click', () => {
  window.location.href = 'https://www.ejemplo.com'; // Cambia la URL a la página de destino
});
