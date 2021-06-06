/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

var contactos;
var editNumber;

$(document).on('click','.deleteButton',function(){

	//recoge el valor de el atributo phoneNumber que se le asigna al list item cuando se crea (es el numero de telefono)
	let x = $(this).parent().parent().attr("phoneNumber");

	//se borra del json del local storage
	delete contactos[x];

	//se vuelve a subir al local storage
	localStorage.setItem("contactos", JSON.stringify(contactos));

	//se borra el list item
	$(this).parent().parent().remove();

});

$(document).on('click','.editButton',function(){

	editNumber = null;
	editNumber = $(this).parent().parent().attr("phoneNumber");

    window.location.href = "editContacto.html?Number="+editNumber;

});

function onDeviceReady() {


    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    //document.getElementById('deviceready').classList.add('ready');

    if(JSON.parse(localStorage.getItem("contactos"))==undefined){

    	console.log("contactos es undefined.");

    	//si contactos no existe creamos el json vacio y lo guardamos en localstorage
    	contactos = {
    		"931111111" : {
    			"first_name" : "contacto",
    			"last_name" : "de ejemplo"
    		}
    	};

    	localStorage.setItem("contactos", JSON.stringify(contactos));
    } else {

    	console.log("contactos no es undefined");

    	//si existe lo recogemos en la variable contactos
    	contactos = JSON.parse(localStorage.getItem("contactos"));
    }

    addContactos();

}


function addContactos(){

	console.log("dentro de addContactos")

	for(x in contactos){
		console.log("añadiendo contacto ")
		$('#listaContactos').append('<li class="collection-item" phoneNumber="'+x+'"><div>'+contactos[x]["first_name"]+' '+contactos[x]["last_name"]+'<a href="#" class="secondary-content deleteButton"><i class="material-icons">delete_forever</i></a> <a href="#!" class="secondary-content editButton"><i class="material-icons">edit</i></a></div></li>');
	}

}

