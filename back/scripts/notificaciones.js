/***************Programa que permite inscribirse al mailing de Turnos **************/

//Desarrollo de Funciones

const validarDatos = (nomb, apellido, email) => {
//Declaración de variables locales
    let nomOk = false;
    let apeOk = false;
    let emailOk = false;
    let longEmail = 0;
    todoOk = false;

// Validar que el nombre no se ingrese vacio.
    if (nomb !== ""){
        nomOk = true

    }else {
        nomOk = false;
    }
    
//Validar que el apellido no se ingrse vacio
    if (apellido !== ""){
        apeOk = true;
    } else {
        apeOk = false;
    }

//Validar que el email tenga al menos un @ y distinto de vacio
    longEmail = email.length;
    
    for (let i= 0; i < longEmail; i++){
        
        if (email[i] === "@" && longEmail !== 0){
            emailOk = true;
            i = longEmail;
        } else {
            emailOk = false;
        }
    }
    
    if (nomOk === true && apeOk === true && emailOk === true){
        todoOk = true;
    }else {
        todoOk = false;
    }
    return todoOk;
    
}

/********************************************************************/
const ingresarDatos = (nomb, apellido, email, datosPacNoti) => {

    datosPacNoti.push(nomb);
    datosPacNoti.push(apellido);
    datosPacNoti.push (email);
    return datosPacNoti;
    
}
/********************************************************************/
const mostrarDatos = (nomb, apellido, email) => {
    alert ("Los datos ingresados son: " + "Nombre: "+ nomb + " - " + "Apellido: " + apellido + " - " + "Email: " + email);
}

/********************************************************************/

//Inicio del Programa Principal

//Inicialización de variables Globales
const confNoti = false;
let datosPacNoti = [];
let nomPac = "";
let apePac = "";
let emailPac = "";
let datosOk = false;


const confNotiTurno = confirm ("¿Desea recibir recordatorio de su tunrno, via email? ");

if (confNotiTurno){
    nomPac = prompt ("Por favor ingrese su Nombre.");
    apePac = prompt ("Por favor ingrese su Apellido.");
    emailPac = prompt ("Por favor, ingrese su e-mail.");

    //Invocacion de Funciones
    datosOk = validarDatos (nomPac, apePac, emailPac);
    
    if (datosOk){
        datosPacNoti = ingresarDatos(nomPac, apePac, emailPac, datosPacNoti);
        mostrarDatos (nomPac, apePac, emailPac);
    }else {
        alert ("Los datos ingresados no son correctos");
        mostrarDatos (nomPac, apePac, emailPac);
    }
    
    console.log (alert ("Muchas gracias por completar sus datos."));

}else {
    console.log (alert ("Muchas gracias por su respuesta."));    
}
