//Efeito botão
let btn = document.querySelector(".button");

btn.onmousemove = function (e) {
	let x = e.pageX - btn.offsetLeft;
	let y = e.pageY - btn.offsetTop;

	btn.style.setProperty('--eixoX', x + "px");
	btn.style.setProperty('--eixoY', y + "px");
};

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