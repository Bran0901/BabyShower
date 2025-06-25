// Cuenta regresiva
const evento = new Date("2025-07-20T16:00:00").getTime();
const countdown = document.getElementById("countdown");

const intervalo = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = evento - ahora;

  if (diferencia < 0) {
    countdown.innerText = "¡Ya empezó el Baby Shower!";
    clearInterval(intervalo);
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  countdown.innerText = `Faltan ${dias}d ${horas}h ${minutos}m ${segundos}s`;
}, 1000);

// Función principal
function mostrarMensaje() {
  const card = document.getElementById("invitationCard");
  const titulo = document.getElementById("titulo");
  const texto = document.getElementById("texto");
  const imagen = document.getElementById("imagen");
  const countdown = document.getElementById("countdown");
  const audio = document.getElementById("audioBienvenida");

  // Cambia el contenido del card
  titulo.innerText = "¡Gracias por confirmar!";
  texto.innerText = "Te esperamos con mucho cariño 💕";
  imagen.style.display = "none";
  countdown.style.display = "none";

  // Estilo de agradecimiento
  card.classList.add("gracias");

  // Confeti animado
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 },
  });

  // Reproduce audio si se permite
  audio.play().catch(() => {
    console.warn("El navegador bloqueó el audio hasta que haya una interacción.");
  });

  // Evita repetir el efecto
  card.onclick = null;
}


// Carrusel con fade entre imágenes
const imagenesCarrusel = document.querySelectorAll(".carrusel-img");
let indice = 0;

function mostrarImagen(indiceNuevo) {
  imagenesCarrusel.forEach((img, i) => {
    img.classList.remove("visible");
    if (i === indiceNuevo) {
      img.classList.add("visible");
    }
  });
  indice = indiceNuevo;
}

function cambiarImagen(direccion) {
  let nuevoIndice = indice + direccion;

  if (nuevoIndice < 0) nuevoIndice = imagenesCarrusel.length - 1;
  if (nuevoIndice >= imagenesCarrusel.length) nuevoIndice = 0;

  mostrarImagen(nuevoIndice);
}

// ⟨ ⟩ Botones (si usas)
function moverCarrusel(direccion) {
  cambiarImagen(direccion);
}

// Cambio automático
setInterval(() => {
  cambiarImagen(1);
}, 4000);




// QR - Generar al cargar
window.addEventListener("DOMContentLoaded", () => {
    const qr = new QRious({
      element: document.getElementById("qrCanvas"),
      value: window.location.href,
      size: 200,
      background: "#ffffff",
      foreground: "#6a1b9a",
      level: "H"
    });
  });



  
