let botones = document.querySelectorAll(".boton");
let startBotton = document.getElementById("inicio");

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
                boton.style.background.color = "blue";
  });
});