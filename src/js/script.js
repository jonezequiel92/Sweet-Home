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

let casa1 = new Inmueble("1", "Departamento", 2 , 1 , 25000, "Av Juan B. Justo 365", "CABA" ,  "35", 38.8 , "Excelente departamento muy luminoso bajas expensas", 2800);
let casa2 = new Inmueble("2", "Departamento", 2 , 1 , 25000, "Av Juan B. Justo 365", "CABA" ,  "35", 38.8 , "Excelente departamento muy luminoso bajas expensas", 2800);

inmuebles.push(casa1) 
inmuebles.push(casa2) 

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
    // this.crearUsuario = function() {
    //     this.id = Math.round(Math.random()*100000)
    //     this.nombre = prompt("Ingrese su Nombre: ");
    //     this.apellido = prompt("Ingrese su Apellido: ");
    //     this.fechaNacimiento = prompt("Ingrese el día de su Nacimiento (dd/mm/aaaa): ");
    //     this.email = prompt("ingrese su email");
    //     this.telefono = prompt("ingrese su número de teléfono: ");
    //     this.vendedor = 0;
    //     this.comprador = 0;
    //     this.cotizo  = 0;
    //     return usuarios.push(new Usuario(id, nombre, apellido, fechaNacimiento, email, telefono, vendedor, comprador, cotizo ));
    // }
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


function Cotizar () {
    const descuento = 0.15;
    const tasa_anual = 0.3;
    let valor_alquiler;
    let valor_expensas;
    let duracion_contrato;
    let cantidad_cuotas;
    let monto_cuota;

    valor_alquiler = parseFloat(prompt("Ingrese Valor del Alquiler por mes"));
    valor_expensas = parseFloat(prompt("Ingrese Valor de las expensas por mes"));
    duracion_contrato = parseInt(prompt("Ingrese Duración del contrato"));
    cantidad_cuotas = parseInt(prompt("Ingrese Número de cuotas a pagar"));

    if( cantidad_cuotas <= 3) {
        monto_cuota = (((valor_alquiler + valor_expensas) * 1.5)  * (1 - descuento)) / 3;
    } else {
        monto_cuota = ( ((valor_alquiler + valor_expensas) * 1.5) * (1 + ((tasa_anual) * (cantidad_cuotas / 12)) )) 
    }

    return alert(`Si usted elige pagar en  ${cantidad_cuotas} cuotas deberá abonar $${monto_cuota} en cada cuota`)
}

console.log("Inicializando el Programa");

console.log("Finalizando el Programa");

