/*
//creamos una funcion para validar las credenciales del usuario

function validarUsuarioyContraseña(usuario, contraseña){
    let usuarioCorrecto = "ErickCoder"
    let contraseñaCorrecta = "House1234"
    if(usuario === usuarioCorrecto && contraseña === contraseñaCorrecta){
        return true
    }else{
        return false
    }
}

// solicitamos al usuario que ingrese sus credenciales
let usuarioIngresado = prompt("Ingresa tu usuario")
let contraseñaIngresada = prompt("Ingresa tu contraseña")

// llamamos a la funcion
let credencialesCorrectas = validarUsuarioyContraseña (usuarioIngresado, contraseñaIngresada)

//validamos las credenciales
if (credencialesCorrectas){
    console.log("Bienvenido")
}else{
    console.log("Acceso no Autorizado, datos incorrectos")
}
*/

//--------------SEGUNDO intento
/* 
//---------funcion para validar al usuario y contraseña
function validarUsuarioyContraseña(usuario, contraseña){
    const usuarioCorrecto = "ErickCoder"
    const contraseñaCorrecta = "House12345"
    return usuario === usuarioCorrecto && contraseña === contraseñaCorrecta
}
// -----------establecemos los intentos permitidos
let intentos = 3;

//--------cremos un ciclo para realizar los intentos
function intentosDeSecion(){
    if (intentos <= 0) {
        alert("Intentos Agotados, cuenta Bloqueada")
        return;
        
    }
//------perdimos al usuario sus Credenciales
    let usuarioIngresado = prompt("Ingresa tu usuario")
    let contraseñaIngresada = prompt("Ingresa tu constraseña")
//llamamos a la primer funcion y la validamos con los valores obtenidos---------
    if(validarUsuarioyContraseña(usuarioIngresado,contraseñaIngresada)){ // ejecutatamos la funcion con VALORES obtenidos por el usuario
       alert("Bienvenido, acceso concedido")
//--------------- en caso contrario denegamos el acceso y mostramos un mensaje de los intentos que quedan       
    }else{
        console.log("Acceso no permitido: usuario y/o contraseña incorrectos.")
        intentos--;
        console.log(`te quedan ${intentos}`);
//-------------- llamamos ala segunda funcion para para continual con el ciclo
       intentosDeSecion();
    }
}

// llamamos a la funcion para comenzar el proceso
intentosDeSecion();


//----------------Creamos un objeto vacio y lo llenamos
alert("ingresa un los siguientes datos para agregarlos")

const miObjeto = {}

miObjeto.producto = prompt("ingresa el primer producto")
miObjeto.precio = parseInt(prompt("ingresa el precio"))
alert(`Se agrego ${miObjeto.producto} con el precio de ${miObjeto.precio}`)
console.log(miObjeto)


*/
var intentos = 3;  //----------------- numero de intentos

//----------------- credenciales correctas
const usuarioCorrecto = "ErickCoder"
const contraseñaCorrecta = "House1234"

while(intentos > 0){
    let usuarioIngresado = prompt("ingresa tu usuario");
    let contraseñaIngresada = prompt("Ingresa tu contraseña")
    //------------validamos 
    if(usuarioCorrecto === usuarioIngresado && contraseñaCorrecta === contraseñaIngresada){
        alert("Bienvenido,acceso exitoso");
        break;
    }else{
        intentos--;
        alert(`Credenciales incorrectas, te quedan ${intentos} intentos`)
    }

}

if (intentos === 0){
    alert("Agotastes tus intentos, Cuenta bloquedad")
}