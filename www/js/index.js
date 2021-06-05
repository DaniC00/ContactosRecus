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
console.log("test");
document.addEventListener('deviceready', onDeviceReady, false);

var contactos;


function onDeviceReady() {


    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    //document.getElementById('deviceready').classList.add('ready');

    if(JSON.parse(localStorage.getItem("contactos"))==undefined){

    	console.log("contactos es undefined.");

    	//si contactos no existe creamos el json vacio y lo guardamos en localstorage
    	contactos = {
    		"test1" : "test1",
    		"test2" : "test2",
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
		console.log("añadiendo contacto..")
		$('#listaContactos').append('<li class="collection-item"><div>'+contactos[x]+'<a href="#!" class="secondary-content"><i class="material-icons">send</i></a> <a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>');
	}

}
