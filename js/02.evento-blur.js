/*=============================================
EL OBJETO DE LAS PROPIEDADES DEL FORMULARIO
=============================================*/

var pf = {

	entradas: document.querySelectorAll("input.validar"),
	valor: null

}

/*=============================================
EL OBJETO DE LOS MÉTODOS DEL FORMULARIO
=============================================*/

var mf = {

	inicioFormulario: function(){

		for(var i = 0; i < pf.entradas.length; i++){

			pf.entradas[i].addEventListener("focus", mf.enFoco);
			pf.entradas[i].addEventListener("blur", mf.fueraFoco)

		}

	},

	enFoco: function(input){
		
		pf.valor = input.target.value;
		
		if(pf.valor == ""){

			document.querySelector("#"+input.target.id).style.background = "rgba(255,255,0,.5)";

			document.querySelector("[for="+input.target.id+"] .obligatorio").style.opacity = 1;

		}

	},

	fueraFoco: function(input){

		document.querySelector("#"+input.target.id).style.background = "white";

		document.querySelector("[for="+input.target.id+"] .obligatorio").style.opacity = 0;

	}

}

mf.inicioFormulario();


