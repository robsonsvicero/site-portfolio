
//Alterar propriedades menu hamburguer e logo
const bkgHamburger = {
    id1: document.getElementById('hamburger'),
    id2: document.getElementById('hamburger2'),
    id3: document.getElementById('hamburger3')
};
const bkgMenu = document.getElementById('bkg-menu');
const logo = document.getElementById('logo');

const menu = document.getElementById('menu-header');

window.addEventListener("scroll", () => {
    if (window.scrollY > 639) {
        bkgHamburger.id1.classList.add("alterado");
        bkgHamburger.id2.classList.add("alterado");
        bkgHamburger.id3.classList.add("alterado");
        bkgMenu.classList.add("fundo");
        logo.style.display = "none";
        menu.style.justifyContent = "flex-end";
    } else {
        bkgHamburger.id1.classList.remove("alterado");
        bkgHamburger.id2.classList.remove("alterado");
        bkgHamburger.id3.classList.remove("alterado");
        bkgMenu.classList.remove("fundo");
        logo.style.display = "block";
        menu.style.justifyContent = "space-between";
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

// Função para fechar o menu ao clicar em um item
function closeMenu() {
    document.getElementById('menu-toggle').checked = false;
  };
