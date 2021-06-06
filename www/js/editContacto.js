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

var contactos = JSON.parse(localStorage.getItem("contactos"))
var query;


function saveNewInfo(){

    var number = document.getElementById("phone_number")
    var name = document.getElementById("first_name")
    var lastName = document.getElementById("last_name")

    if(query.Number != number.value){
        delete contactos[query.Number];

        contactos[number.value] = {
        "first_name" : name.value,
        "last_name" : lastName.value,
        };

    } else {
        contactos[number.value].first_name = name.value;
        contactos[number.value].last_name = lastName.value;
    }
    
    localStorage.setItem("contactos", JSON.stringify(contactos));

    window.location.href = "index.html";

}


function onDeviceReady() {

	console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    //recojo el parametro de la url (es el numero de telefono)
    query = getQueryParams(document.location.search);

    document.getElementById("phone_number").value = query.Number;
    document.getElementById("first_name").value = contactos[query.Number]["first_name"];
    document.getElementById("last_name").value = contactos[query.Number]["last_name"];

}

//funcion que devuelve los parametros que se pasan por url
function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}