document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list a");
  const logo = document.querySelector(".logo");

  // Função para abrir/fechar menu mobile
  function toggleMenu() {
    mobileMenu.classList.toggle("active");
    navList.classList.toggle("active");
  }

  // Fecha o menu ao clicar em um link
  function closeMenu() {
    mobileMenu.classList.remove("active");
    navList.classList.remove("active");
  }

  // Adiciona fundo ao header no scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      logo.src = "src/images/logo/símbolo_azul.png"
      header.classList.add("scrolled");
    } else {
      logo.src = "src/images/logo/símbolo_branco.png";
      header.classList.remove("scrolled");
    }
  });

  // Event Listeners
  mobileMenu.addEventListener("click", toggleMenu);
  navLinks.forEach(link => link.addEventListener("click", closeMenu));
});
