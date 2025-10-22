/***************Programa que permite inscribirse al mailing de Turnos **************/

//Desarrollo de Funciones

const validarDatosPac = (nomb, apellido, email, datosOk) => {
let datosOk = false;



}

const ingresarDatos = (nomb, apellido, email, datosPacNoti, datosOk) => {

    if (datosOk){
    datosPacNoti.push(nomb);
    datosPacNoti.push(apellido);
    datosPacNoti.push (email);
    return datosPacNoti;
    }
}

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
    //Funciones
    validarDatosPac (nomPac, apePac, emailPac, datosOk);

    datosPacNoti = ingresarDatos(nomPac, apePac, emailPac, datosPacNoti, datosOk);
    

    console.log (alert ("Muchas gracias por completar sus datos."));
    console.log (datosPacNoti);
}else {
    console.log (alert ("Muchas gracias por su respuesta."));
    
}
                                                                                            

