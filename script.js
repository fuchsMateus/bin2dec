let convertState = "bin2dec";  
const texto1 = document.getElementById("texto1");
const input = document.getElementById("input");
const botaoTrocar = document.getElementById("botao-trocar");
const botaoConverter = document.getElementById("botao-converter");
const campoResultado = document.getElementById("campo-resultado");

function trocarConversao(){
    if(convertState == "bin2dec"){
        texto1.textContent = "Valor Decimal"
        campoResultado.textContent = ""
        convertState = "dec2bin";
    }
    else{
        texto1.textContent = "Valor Binário"
        campoResultado.textContent = ""
        convertState = "bin2dec";
    }
}
