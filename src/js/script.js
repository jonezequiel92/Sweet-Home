const descuento = 0.15;
const tasa_anual = 0.3;
let valor_alquiler;
let valor_expensas;
let duracion_contrato;
let cantidad_cuotas;
let monto_cuota;

function pedir_datos () {
    valor_alquiler = parseFloat(prompt("Ingrese Valor del Alquiler por mes"));
    valor_expensas = parseFloat(prompt("Ingrese Valor de las expensas por mes"));
    duracion_contrato = parseInt(prompt("Ingrese Duración del contrato"));
    cantidad_cuotas = parseInt(prompt("Ingrese Número de cuotas a pagar"));

    if( cantidad_cuotas <= 3) {
        monto_cuota = (((valor_alquiler + valor_expensas) * 1.5)  * (1 - descuento)) / 3;
    } else {
        monto_cuota = ( ((valor_alquiler + valor_expensas) * 1.5) * (1 + ((tasa_anual) * (cantidad_cuotas / 12)) ))

    }
    return monto_cuota;
}


console.log("Inicializando el Programa");

pedir_datos();
alert("Si usted elige " + cantidad_cuotas + "  cuotas deberá abonar $"+ monto_cuota + " por cada cuota" );

console.log("Finalizando el Programa");