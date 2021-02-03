'use strict';

let usuarios = [];
let inmuebles = [];
let publicaciones = [];

function Inmueble ( id, tipo, ambientes, dormitorios, precio, ubicacion, localidad, antiguedad, metros2, descripcion, expensas ) {
    this.id = id;
    this.tipo = tipo;
    this.ambientes = ambientes;
    this.dormitorios = dormitorios;
    this.precio = precio;
    this.ubicacion = ubicacion;
    this.localidad = localidad;
    this.antiguedad = antiguedad;
    this.metros2 = metros2;
    this.descripcion = descripcion;
    this.expensas = expensas;
}

let casa1 = new Inmueble(1, "Departamento", 2 , 1 , 35000, "Av Juan B. Justo 365", "CABA" ,  "35", 38.8 , "Excelente departamento muy luminoso bajas expensas", 2800);
let casa2 = new Inmueble(2, "Departamento", 2 , 1 , 25000, "Av Juan B. Justo 365", "CABA" ,  "35", 38.8 , "Excelente departamento muy luminoso bajas expensas", 2800);
let casa3 = new Inmueble(3, "Departamento", 2 , 1 , 25000, "Av Juan B. Justo 365", "CABA" ,  "35", 38.8 , "Excelente departamento muy luminoso bajas expensas", 2800);
let casa4 = new Inmueble(4, "Departamento", 2 , 1 , 25000, "Av Juan B. Justo 365", "CABA" ,  "35", 38.8 , "Excelente departamento muy luminoso bajas expensas", 2800);
let casa5 = new Inmueble(5, "Departamento", 2 , 1 , 20000, "Av Juan B. Justo 365", "CABA" ,  "35", 38.8 , "Excelente departamento muy luminoso bajas expensas", 2800);

inmuebles.push(casa1) 
inmuebles.push(casa2) 
inmuebles.push(casa3) 
inmuebles.push(casa4) 
inmuebles.push(casa5) 

function cargarInmueble() {
    let id_inmueble = Math.round(Math.random()*100000);
    let tipo = prompt ("Ingrese si es un Departamento, Ph, Casa u otro");
    let ambientes = parseInt(prompt("Ingrese cantidad de ambientes"));
    let dormitorios = parseInt(prompt("Ingrese canridad de dormitorios"));
    let precio = parseFloat(prompt("Ingrese el precio del inmueble"));
    let ubicacion = prompt("Ingrese la ubicación del inmueble");
    let localidad = prompt("Ingrese la Localidad");
    let antiguedad = parseInt(prompt("Ingrese la antigüedad"));
    let metros2 = parseFloat(prompt("Ingrese cantidad de metros cuadrados"));
    let descripcion = prompt("Ingrese una descripción");
    let expensas = parseFloat(prompt ("Ingrese el valor de las expensas"))

    return inmuebles.push(new Inmueble(id_inmueble, tipo, ambientes, dormitorios, precio, ubicacion, localidad, antiguedad, metros2, descripcion, expensas) ); 
}

function Publicacion (id, fecha_publicacion, fecha_baja, id_inmueble, id_vendedor, id_comprador, estado ) {
    this.id = id;
    this.fecha_publicacion = fecha_publicacion;
    this.fecha_baja = fecha_baja;
    this.id_inmueble = id_inmueble;
    this.id_vendedor = id_vendedor;
    this.id_comprador = id_comprador;
    this.estado = estado;
}


function Usuario (id, nombre, apellido, fechaNacimiento, email, telefono, vendedor, comprador, cotizo) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.email = email;
    this.telefono = telefono;
    this.vendedor = vendedor;
    this.comprador = comprador;
    this.cotizo = cotizo;

    this.vender = function () {
        vendedor = 1;
    }
    this.comprar = function () {
        comprador = 1;
    }
    this.cotizar = function () {
        cotizo = 1;
    }
}

function crearUsuario() {
    let id_usuario = Math.round(Math.random()*100000);
    let nombre_usuario = prompt("Ingrese su Nombre: ").toUpperCase;
    let apellido_usuario = prompt("Ingrese su Apellido: ").toUpperCase;
    let fechaNacimiento_usuario = prompt("Ingrese el día de su Nacimiento (dd/mm/aaaa): ");
    let email_usuario = prompt("ingrese su email").toUpperCase;
    let telefono_usuario = prompt("ingrese su número de teléfono: ");
    let vendedor_usuario = 0;
    let comprador_usuario = 0;
    let cotizo = 0;
    
    return usuarios.push(new Usuario(id_usuario, nombre_usuario, apellido_usuario, fechaNacimiento_usuario, email_usuario, telefono_usuario, vendedor_usuario, comprador_usuario, cotizo ) ); 
}


let verInmuebles = () => inmuebles.forEach( elemento => console.log (elemento))

let filtrarInmuebles = function (){
    let precioMax = parseFloat(prompt('Ingrese precio máximo de alquiler: '))
    return inmuebles.filter( propiedades => propiedades.precio <= precioMax )

}

function borrarInmueble (id_inmueble) {
    inmuebles.forEach( inmueble => 
        {  if ( inmueble.id == id_inmueble) {
                let element = inmuebles.indexOf(inmueble)
                inmuebles.splice(element, 1); 
            } 
        } )
}

/**************************
 * OBTENIENDO LOS DATOS DEL SELECT (index.html)
 * **********************/
// Obtener la referencia a la lista
let lista = document.getElementById("options");

// Obtener el índice de la opción que se ha seleccionado
let indiceSeleccionado = lista.selectedIndex;

// Con el índice y el array "options", obtener la opción seleccionada
let opcionSeleccionada = lista.options[indiceSeleccionado];

//Obtener el valor 
var valorSeleccionado = opcionSeleccionada.value;




/**************************
 * OBTENIENDO LOS DATOS DEL FORMULARIO en pagina de seguro.html
 * **********************/
const descuento = 0.15;
const tasa_anual = 0.3;
let valor_alquiler = document.getElementById("alquiler").value;
let valor_expensas= document.getElementById("expensas").value;
let duracion_contrato = document.getElementById("duracion").value;
let cantidad_cuotas = document.getElementById("cuota").value;
let correo = document.getElementById("correo").value;

function Cotizar () {
    if( cantidad_cuotas <= 3) {
        monto_cuota = (((valor_alquiler + valor_expensas) * 1.5)  * (1 - descuento)) / 3;
    } else {
        monto_cuota = ( ((valor_alquiler + valor_expensas) * 1.5) * (1 + ((tasa_anual) * (cantidad_cuotas / 12)) )) 
    }

    return alert(`Si usted elige pagar en  ${cantidad_cuotas} cuotas deberá abonar $${monto_cuota} en cada cuota`)
}

console.log("Inicializando el Programa");

console.log("Finalizando el Programa");

