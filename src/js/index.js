//Efeito botão
let btn = document.querySelector(".button");

btn.onmousemove = function (e) {
	let x = e.pageX - btn.offsetLeft;
	let y = e.pageY - btn.offsetTop;

	btn.style.setProperty('--eixoX', x + "px");
	btn.style.setProperty('--eixoY', y + "px");
};