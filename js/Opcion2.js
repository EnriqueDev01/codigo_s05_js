let TI = 0;
let N = 0;
let TP = 0;
let PA = 0;
let CA = 0;
let TO = 0;
let TOT = 0;

function imprime(n){
    console.log(`El pago total es ${n}`);
    alert(`El pago total es ${n}`);
}

TI = +prompt("Seleccione el tipo de hamburguesa: [1].Simple, [2].Doble, [3].Triple");
N = +prompt("Ingrese la cantidad de hamburguesas:");
TP = +prompt("Seleccione el tipo de pago: [1].Efectivo, [2].Tarjeta");

switch (TI) {
    case 1:
        PA = 20;
        break;
    case 2:
        PA = 25;
        break;
    case 3:
        PA = 28;
        break;
    default:
        break;
}

if (TP === 1) {
    TO = N * PA;
    imprime(TO);
} else {
    TO = N * PA;
    CA = TO * 0.05;
    TOT = CA + TO;
    imprime(TOT);
}