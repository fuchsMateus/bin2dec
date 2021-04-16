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
    if(convertState == "bin2dec"){
        let valorAConverter = input.value;

        for (let i = 0; i < valorAConverter.length; i++) {    
            if((valorAConverter.charAt(i) != '1' && valorAConverter.charAt(i) != '0') 
                || valorAConverter == null){
                alert("O valor a ser convertido possui caracteres inválidos");
                return false;
            }  
        } 

        if(valorAConverter.includes(".") || valorAConverter.includes(",")
            ||  valorAConverter.includes("-") ||  valorAConverter.includes("+")
            ||  valorAConverter.charAt(0) ==""){

                alert("O valor a ser convertido possui caracteres inválidos");
        }
        else{
            let result = 0;
            for (let i = 0; i < valorAConverter.length; i++) {
                tempRes = parseInt(valorAConverter.charAt(i));
                tempRes = tempRes * Math.pow(2, valorAConverter.length -(i+1));
                result+= tempRes;
            }
            
            if(valorAConverter.length >= 32){
                campoResultado.textContent = valorAConverter.slice(0, 29) + "... bin = " + result+ " dec";
            }
            else{
                campoResultado.textContent = valorAConverter + " bin = " + result+ " dec";
            }
        }
    }
}

