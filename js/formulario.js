
//EL OBJETO DE LAS PROPIEDADES DEL FORMULARIO


var pf = {

	entradas: document.querySelectorAll("input.validar"),//Selcciona los input a validar

	valor: null, 

	expresionRegular: null, //Expresion para el password  para validr los caracteres 

	validarUsuario: false,

	validarPassword: false,

	validarEmail: false,

	validarTerminos: null

}

//EL OBJETO DE LOS METDOS DEL FORMULARIO


var mf = {

	inicioFormulario() {

		for (var i = 0; i < pf.entradas.length; i++) {

			pf.entradas[i].addEventListener("focus", mf.enFoco);  // se crea el evento focus se declare el evento  mf.enfoco

			pf.entradas[i].addEventListener("blur", mf.fueraFoco); //Este es el evento blur o sea cuando no este seleccionado nada 

			pf.entradas[i].addEventListener("change", mf.cambioEntrada);//aqui con el evento change se lee un cambio de entrada 

		}

	},



	enFoco: function(input) { //para saber la caja en  que esta en foco 

		pf.valor = input.target.value; //Se captura la propiedad value



		if (pf.valor == "") {

			document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 1;

			document.querySelector("#" + input.target.id).style.background = "yellow";

		}


		document.querySelector("[for="+input.target.id+"]").appendChild(document.createElement("DIV")).setAttribute("class","error") //Se crea un div al dar clic en el input  y se establese class error 

	},


	fueraFoco: function(input){
		/*Cuando se salga del foco se regresa al estdo natural*/

		document.querySelector("#"+input.target.id).style.background = "white";

		document.querySelector("[for="+input.target.id+"] .obligatorio").style.opacity = 0;

	},


	cambioEntrada: function(input){

		pf.valor = input.target.value; //Se lee el valor del input seleccionado

		if(pf.valor != ""){ //Si calor es diferente a vacio 

			switch(input.target.id){ //Se elee el id del iput

				case "nombre":

					if(pf.valor.length < 2 || pf.valor.length > 10){

						document.querySelector("[for="+input.target.id+"] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: '+input.target.placeholder+'</span>'; //Aqui se sellciona la clase que se creo en el div linea 59 y se estableces los valores si los caracteres son menos de 2 y mas de 6 caracteres

						pf.validarUsuario = false;

					}else{

						document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error"))//si los datos son correctos se elimna la caja div que se creo al darle click

						pf.validarUsuario = true;

					}

				break;



				case "email":

					pf.expresionRegular = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

						if(!pf.expresionRegular.test(pf.valor)){

							document.querySelector("[for="+input.target.id+"] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: '+input.target.placeholder+'</span>';

							pf.validarEmail = false; //si escribio mal el email regresa falso

						}else{

							document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error"))

							pf.validarEmail = true; //si esta bien el email regres verdadero
						}

				break;

			}

		}else{

			document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error")) //Sino esta vacio que borre la caja de error 

		}

	},


	validarFormulario: function() {



		pf.validarTerminos = document.querySelector("#terminos").checked; //Si el validar terminos esta en check



		if (!pf.validarUsuario || !pf.validarEmail) {


            document.querySelector("#labelEnviar").innerHTML = '<span style = "color:red">¡*Tiene errores en los datos que ha ingresado, favor revisar de nuevo!</span>';
			console.log("hola");

           //Si ninguna de las tres validaciones es verdadero regresa false

			return false;



		} else if (!pf.validarTerminos) {//si validar Termnos esta en falso

          // si la caja de validar no esta en check regresa false
			document.querySelector("#labelEnviar").innerHTML = '<span style="color:red">¡*Favor acepte términos y condiciones!</span>'; //Aviso para aceptar los terminos y condiciones



			return false;



		} else {



			return true; //Si es verdadero y todas las validaciones son correctas regresa un true

		}

	}



}



mf.inicioFormulario();