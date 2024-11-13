//Alterar propriedades menu hamburguer e logo
const bkgHamburger = document.getElementById('hamburguer');
const bkgMenu = document.getElementById('bkg-menu');
const logo = document.getElementById('logo');

window.addEventListener("scroll", () => {
    if (window.scrollY > 639) {
        bkgHamburger.classList.add("alterado");
        bkgMenu.classList.add("fundo");
        logo.style.display = "none";
    } else {
        bkgHamburger.classList.remove("alterado");
        bkgMenu.classList.remove("fundo");
        logo.style.display = "block";
    }
});


//Efeito botão
let btn = document.querySelector(".botao");

btn.onmousemove = function(e) {
    let x = e.pageX - btn.offsetLeft;
    let y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--eixoX', x + "px");
    btn.style.setProperty('--eixoY', y + "px");
};