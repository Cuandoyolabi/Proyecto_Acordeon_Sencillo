document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos con la clase "toggle"
    const toggles = document.querySelectorAll(".toggle");
  
    // Agregar un evento de clic a cada botón
    toggles.forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        // Obtener el atributo "img-respuesta" para identificar la respuesta correspondiente
        const respuestaId = toggle.getAttribute("img-respuesta");
        const respuesta = document.getElementById(respuestaId);
  
        // Mostrar u ocultar la respuesta correspondiente
        if (respuesta.style.display === "none" || respuesta.style.display === "") {
          // Si la respuesta está oculta, mostrarla y ocultar otras respuestas
          ocultarTodasLasRespuestas();
          respuesta.style.display = "block";
          toggle.style.backgroundImage = "url(/assets/images/icon-minus.svg)";
        } else {
          // Si la respuesta está visible, ocultarla
          respuesta.style.display = "none";
          toggle.style.backgroundImage = "url(/assets/images/icon-plus.svg)";
        }
      });
    });
  
    // Función para ocultar todas las respuestas
    function ocultarTodasLasRespuestas() {
      const respuestas = document.querySelectorAll(".respuesta");
      const toggles = document.querySelectorAll(".toggle");
  
      respuestas.forEach(function (respuesta) {
        respuesta.style.display = "none";
      });
  
      toggles.forEach(function (toggle) {
        toggle.style.backgroundImage = "url(/assets/images/icon-plus.svg)";
      });
    }
  });
  