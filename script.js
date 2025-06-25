window.addEventListener("DOMContentLoaded", () => {

  // 🎉 Confeti automático al entrar
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 },
  });

  // 🔊 Audio de fondo al entrar
  const audio = document.getElementById("audioBienvenida");
  audio.play().catch(() => {
    console.warn("El navegador bloqueó el audio hasta que haya interacción del usuario.");
  });

  // ⏳ Cuenta regresiva
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
