// script.js
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-primary"); // Selecciona todos los botones con la clase btn-primary
  
    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const recipePage = this.getAttribute("href"); // Obtiene el enlace de la receta desde el atributo href
        window.location.href = recipePage; // Redirige a la página de receta
      });
    });
  });
  
