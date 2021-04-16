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
    let valorAConverter = input.value;
    if(convertState == "bin2dec"){
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
    else{
        for (let i = 0; i < valorAConverter.length; i++) {    
            if((valorAConverter.charAt(i) != '0' && valorAConverter.charAt(i) != '1'
                && valorAConverter.charAt(i) != '2' && valorAConverter.charAt(i) != '3'
                && valorAConverter.charAt(i) != '4' && valorAConverter.charAt(i) != '5'
                && valorAConverter.charAt(i) != '6' && valorAConverter.charAt(i) != '7'
                && valorAConverter.charAt(i) != '8' && valorAConverter.charAt(i) != '9') 
                || valorAConverter == null){
                alert("O valor a ser convertido possui caracteres inválidos");
                return false;
            }  
        } 

        if(valorAConverter.includes(".") || valorAConverter.includes(",")
            ||  valorAConverter.includes("-") ||  valorAConverter.includes("+")
            ||  valorAConverter.charAt(0) =="" || (valorAConverter.charAt(0) == '0'
                && valorAConverter.length > 1)){

                alert("O valor a ser convertido possui caracteres inválidos");
        }
        else{
            let result = "";
            let temp = parseInt(valorAConverter);
            while(temp != 0) {
                if(temp % 2 == 0){
                    result = result + '0';
                    temp = temp/2;
                }
                else{
                    result = result + '1';
                    temp = (temp-1)/2;
                }
            }
            var splitString = result.split(""); 
            var reverseArray = splitString.reverse(); 
            result = reverseArray.join("");
            
            if(valorAConverter.length >= 32){
                if(result.length > 29){
                    campoResultado.textContent = valorAConverter.slice(0, 29) + "... dec = ";
                    const inputTemp = document.createElement("input");
                    inputTemp.setAttribute('id', 'inputTemp');
                    inputTemp.value = result;
                    inputTemp.disabled = true;
                    campoResultado.append(inputTemp);
                    const textTemp = document.createElement("span");
                    textTemp.textContent = " bin";
                    campoResultado.append(textTemp);
                }
                else{
                    campoResultado.textContent = valorAConverter.slice(0, 29) + "... dec = " + result+ " bin";
                }
            }
            else{
                if(result.length > 29){
                    campoResultado.textContent = valorAConverter + " dec = ";
                    const inputTemp = document.createElement("input");
                    inputTemp.setAttribute('id', 'inputTemp');
                    inputTemp.value = result;
                    inputTemp.disabled = true;
                    campoResultado.append(inputTemp);
                    const textTemp = document.createElement("span");
                    textTemp.textContent = " bin";
                    campoResultado.append(textTemp);
                }
                else{
                    campoResultado.textContent = valorAConverter + " dec = " + result+ " bin";
                }
            }
        }
    }
}

