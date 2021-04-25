let NC = 0;
let CC = 0;
let TOT = 0;

function imprime(n, m){
    console.log(`El costo de la cita es: ${n} - El monto del tratamiento es: ${m}`);
    alert(`El costo de la cita es: ${n} - El monto del tratamiento es: ${m}`);
}

NC = +prompt("Ingrese el numero de consulta:");

if (NC > 8) {
    CC = 50;
    TOT = (NC - 8)*50 + 3*100 + 2*150 + 3*200;
    imprime(CC, TOT);
} else if (NC > 5) {
    CC = 100;
    TOT = (NC - 5)*100 + 2*150 + 3*200;
    imprime(CC, TOT);
} else if (NC > 3) {
    CC = 150;
    TOT = (NC - 3)*150 + 3*200;
    imprime(CC, TOT);
} else {
    CC = 200;
    TOT = NC*200;
    imprime(CC, TOT);
}
