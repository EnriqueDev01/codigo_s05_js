let L = 0;
let PG = 0;
let TG = 0;
let GA = 0;

L = +prompt("Ingrese la cantidad de litros de leche:");
PG = +prompt("Ingrese el precio del galon de leche: ");

TG = L / 3.785;
GA = TG * PG;

console.log(`La ganancia por la produccion es ${GA.toFixed(2)}`);
alert(`La ganancia por la produccion es ${GA.toFixed(2)}`);