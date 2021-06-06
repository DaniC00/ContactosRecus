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

var contactos = JSON.parse(localStorage.getItem("contactos"))

function addNewContact(){

	var number = document.getElementById("phone_number")
    var name = document.getElementById("first_name")
    var lastName = document.getElementById("last_name")

    console.log(number.value)
    console.log(name.value)
    console.log(lastName.value)

    if(number.value.length > 0) {

    	contactos[number.value] = {
    		"first_name" : name.value,
    		"last_name" : lastName.value,
    	}

    	localStorage.setItem("contactos",JSON.stringify(contactos));

    } else {
    	testeito
    }

    window.location.href = "index.html";

}


function onDeviceReady() {

	console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);


}