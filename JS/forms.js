var getNom = function mostrarNombre() {
    var nombre = document.getElementById("nombre").value;
    console.log(nombre);
}

var getEmail = function mostrarEmail() {
    var email = document.getElementById("email").value;
    console.log(email);
}



function mostrarCentro() {
    var opciones = document.getElementsByName("centro");
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].value) {
            console.log(opciones[i].value);
        }
    }
}




function mostrarEstado() {
    var opciones = document.getElementsByName("estado");
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            console.log(opciones[i].value);
        }
    }
}

function mostrarRecomendarOpcion() {
    var opciones = document.getElementsByName("recomendar");
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            console.log(opciones[i].value);
        }
    }
}

function mostrarcheck() {
    var opcioncheck = document.getElementsByName("check");
    for (let i = 0; i < opcioncheck.length; i++) {
        if (opcioncheck[i].checked) {
            console.log(opcioncheck[i].value);
        }
    }
}

var getComent = function mostrarComent() {
    var coment = document.getElementById("coment").value;
    console.log(coment);
}