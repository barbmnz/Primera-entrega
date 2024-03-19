let usuario = prompt("A continuación, ingresa tu nombre por favor: ") 
let user = prompt("Ahora, ingresa tu apellido: ") 
let nombreCompleto = usuario + " " + user;
    alert("Hola " + nombreCompleto + "!"); //mmmmmm

let numero = parseFloat(prompt("Por favor, ingresa tu año de nacimiento"));

añoActual = 2024;
calculo = añoActual - numero;

if (calculo < 15) {
    alert("Tan solo tienes "+ calculo + " años" +"!"+
     " puedes ingresar al sitio web pero con la supervisión de un adulto" + "!");

} else {
    alert("Bienvenida/o a nuestra web, " + usuario + "!");
}
//resultado en consola

let codigo = parseInt(prompt("Ingrese el código del producto que desea comprar:\n1 - Chaqueta de Mezclilla\n2 - Chaqueta de Cuero\n3 - Chaqueta Marinero\n0 - SALIR"));
const IVA = 0.19;
const descuento = 0.1;

let total = 0;

while (codigo!= 0) {
    switch (codigo) { 
        case 1:
            total +=100;
            alert("El precio de la Chaqueta de Mezclilla es de $100. Total acumulado en el carrito: "+ total);
            break;
        case 2:
            total +=200;
            alert("El precio de la Chaqueta de Cuero es $200. Total acumulado en el carrito: "+ total);
            break;
        case 3:
            total +=130;
            alert("El precio de la Chaqueta Marinero es $130. Total acumulado en el carrito: "+ total);
            break;
        default:
            alert("ERROR EN EL CODIGO");
            break;
    }
    codigo = parseInt(prompt("Ingrese el código del producto que desea comprar:\n1 - Chaqueta Mezclilla\n2 - Chaqueta de Cuero\n3 - Chaqueta Marinero\n0 - SALIR"));
}


if (total != 0) {
    let montoAPagar = parseInt(prompt("Cuál sera tu método de pago?\n1 - Crédito\n2 - Débito"));

    if(montoAPagar == 1) {
        alert("El total a pagar es $" + impuestosYdescuentos (IVA, 0));    
    } else if (montoAPagar == 2) {
        alert("El total a pagar es $"+ impuestosYdescuentos (IVA, descuento));
    } else {
        alert("OPCIÓN INVÁLIDA");
    }
}

function impuestosYdescuentos(impuestos, descuentos) {
    let totalConDescuento = total * (1 - descuentos);
    //calculo total cn impuestos
    let totalConImpuestos = totalConDescuento * (1 + impuestos);
    return totalConImpuestos;
}
