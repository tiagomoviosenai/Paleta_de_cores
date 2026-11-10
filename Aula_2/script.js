let tela = document.querySelector("#tela-de-pintura"); /*é um comado para buscar um elemento dentro do seu HTML... ultilizandoa as mesmmas regras de seleção que usa mos no css */
let corAzul = document.querySelector("#pincel-azul");
let corVermelha = document.querySelector("#pincel-vermelho");
let corAmarela = document.querySelector("#pincel-amarelo");

let corPreto = document.querySelector("#pincel-preto");

let corMarrom = document.querySelector("#pincel-marrom");

let corRoxo = document.querySelector("#pincel-roxo");

let corLaranja = document.querySelector("#pincel-laranja");

let corRosa = document.querySelector("#pincel-rosa");

let corVerde = document.querySelector("#pincel-verde");

corAzul.addEventListener("click", azul);
corVermelha.addEventListener("click", vermelho);
corAmarela.addEventListener("click", amarelo);
corPreto.addEventListener("click", preto);
corMarrom.addEventListener("click", marrom);
corRoxo.addEventListener("click", roxo);
corLaranja.addEventListener("click", laranja);
corRosa.addEventListener("click", rosa);
corVerde.addEventListener("click", verde);
let nomeCor = document.querySelector("h3");


function azul(){
    tela.style.background = "blue";
    nomeCor.innerHTML = "Azul"; /*é uma propriedade de elementos HTML na JS usada para ler e alterar todo o conteudo da uma tg */
}

function vermelho(){
    tela.style.background = "red";
    nomeCor.innerHTML = "Vermelho";
}

function amarelo(){
    tela.style.background = "gold";
    nomeCor.innerHTML = "Amarelo";
}

function preto(){
    tela.style.background = "black";
    nomeCor.innerHTML = "Preto";
}

function marrom(){
    tela.style.background = "brown";
    nomeCor.innerHTML = "Marrom";
}

function roxo(){
    tela.style.background = "purple";
    nomeCor.innerHTML = "Roxo";
}

function laranja(){
    tela.style.background = "orange";
    nomeCor.innerHTML = "Laranja";
}

function rosa(){
    tela.style.background = "pink";
    nomeCor.innerHTML = "Rosa";
}

function verde(){
    tela.style.background = "green";
    nomeCor.innerHTML = "Verde";
}