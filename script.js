window.addEventListener("DOMContentLoaded", () => {

  // 🎉 Confeti automático al entrar
  confetti({
    particleCount: 100,
    spread: 60,
    origin:{y:0.7},
  });

  // 🔊 Audio de fondo al entrar
  const audio = document.getElementById("audioBienvenida");
  audio.play().catch(() => {
    console.warn("El navegador bloqueó el audio hasta que haya interacción del usuario.");
  });

  // ⏳ Cuenta regresiva
const evento = new Date("2025-08-09T15:30:00").getTime();

function actualizarCuenta() {
  const ahora = new Date().getTime();
  const diferencia = evento - ahora;

  if (diferencia < 0) {
    document.querySelector(".cuenta-animada").innerHTML = "🎉 ¡Ya empezó el Baby Shower!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").innerText = String(dias).padStart(2, "0");
  document.getElementById("horas").innerText = String(horas).padStart(2, "0");
  document.getElementById("minutos").innerText = String(minutos).padStart(2, "0");
  document.getElementById("segundos").innerText = String(segundos).padStart(2, "0");
}

setInterval(actualizarCuenta, 1000);
actualizarCuenta();


  // 🖼️ Carrusel automático
  const imagenesCarrusel = document.querySelectorAll(".carrusel-img");
  let indice = 0;

  function mostrarImagen(indiceNuevo) {
    imagenesCarrusel.forEach((img, i) => {
      img.classList.remove("visible");
      if (i === indiceNuevo) img.classList.add("visible");
    });
    indice = indiceNuevo;
  }

  setInterval(() => {
    const nuevoIndice = (indice + 1) % imagenesCarrusel.length;
    mostrarImagen(nuevoIndice);
  }, 4000);

  document.getElementById("activarSonido").addEventListener("click", () => {
  document.getElementById("audioBienvenida").play();
  document.getElementById("activarSonido").style.display = "none";
});

});
