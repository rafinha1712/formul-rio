import { PALAVRAS_RUINS } from "./palavrasRuins.js";
const botaoMostraPalavras = document.querySelector("#botao-palavrachave"); 

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave); 

function mostraPalavrasChave() { 
  alert("fui clicado!"); 
} 