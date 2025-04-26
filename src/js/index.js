//Efeito botão
let buttons = document.querySelectorAll(".button");

buttons.forEach((btn) => {
  btn.addEventListener("mousemove", function (e) {
    let x = e.pageX - btn.offsetLeft;
    let y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--eixoX', x + "px");
    btn.style.setProperty('--eixoY', y + "px");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const whatsappButton = document.querySelector(".whatsapp-button");

  window.addEventListener("scroll", function() {
      if (window.scrollY > 100) {
          whatsappButton.style.display = "flex";
      } else {
          whatsappButton.style.display = "none";
      }
  });
});