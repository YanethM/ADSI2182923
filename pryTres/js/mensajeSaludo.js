console.log("Saludo desde el JavaScript");

/* Primer función en JavaScript Alt + Shift + A*/
/* Función de escritura desde JS */
function nombreFuncion() {
    /* Instrucciones - Operaciones de la función */
    document.getElementById("msg1").innerHTML = "Hola desde un H1";
    document.getElementById("msg2").innerHTML = "Hola desde un Label";
    document.getElementById("msg3").innerHTML = "Hola desde un Párrafo";
}

function alertaMensaje() {
    /* let nombreVariable */
    let nombreUsuario = prompt("Bienvenido al sistema, por favor ingrese su nombre");
    document.getElementById("name").innerHTML = "Ha iniciado sesión " + nombreUsuario;
}