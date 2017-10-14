$(document).ready(main);




function main(){


 $("#encodeText").on("click", funcEncodeText);
 $("#desEncodeText").on("click", funcDecodeText);
}
//enigma
	function enigma(code,pass,option){
		var textoOut =[];
		for(var i = 0; i< code.length;i++){
			if(option){
				textoOut.push(code[i].charCodeAt() + pass);
			}else{
				textoOut.push(code[i].charCodeAt() - pass);
			}
		}
		return textoOut;
	}



//Encode
	function funcEncodeText(){
		var password =  Number($("#password").val());
		var textoIn = $("#textIn").val();
		var letras = textoIn.split("");
		var textoOut = enigma(letras,password,true);
		var respuesta = String.fromCharCode.apply(null,textoOut);
		var campoOut = $("#textOut").val(respuesta);
	}
//Decode
	function funcDecodeText(){
		var password =  Number($("#password").val());
		var textoIn = $("#textOut").val();
		var letras = textoIn.split("");
		var textoOut = enigma(letras,password);
		var respuesta = String.fromCharCode.apply(null,textoOut);
		var campoOut = $("#textIn").val(respuesta);
	}