let convertState = "bin2dec";  
const texto1 = document.getElementById("texto1");
const input = document.getElementById("input");
const botaoTrocar = document.getElementById("botao-trocar");
const botaoConverter = document.getElementById("botao-converter");
const campoResultado = document.getElementById("campo-resultado");

function trocarConversao(){
    if(convertState == "bin2dec"){
        texto1.textContent = "Valor Decimal"
        input.value = null;
        campoResultado.textContent = ""
        convertState = "dec2bin";
    }
    else{
        texto1.textContent = "Valor Binário"
        input.value = null;
        campoResultado.textContent = ""
        convertState = "bin2dec";
    }
    
}

function verificaCaracter(){
    if(convertState == "bin2dec"){
        if(input.value.slice(-1) != "1" && input.value.slice(-1) != "0"
        && input.value.slice(-1) != ""){
                alert("O valor digitado não é binário");
                input.value = input.value.slice(0, -1);
        }
    }
    else{
        if(input.value.charAt(0) == "0" && input.value.charAt(1) != ""){
            alert("O valor digitado não é válido");
            input.value = input.value.slice(0, -1);
        }
    }
}

function converter(){

}

