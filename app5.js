   /* ESTRUCTURAS DE CONTROL*/

const flight = 100;
const hotel = 50;
const tour= 30;
const total= flight + hotel + tour;
const budget = 300;

if (budget > total){
    console.log("Me voy de viaje");
} else if (budget == total) {
    console.log("Puedo ir pero tengo presupuesto ajustado")
} else {
    console.log("No me puedo ir de viaje");
}

   /* OPERADORES TERNARIOS*/  

const result = budget > total ? console.log("O.T -> Si me voy"):console.log("O.T-> No me voy");
        // Presupuesto mayor que total ? --> hago esto / si no --> hago esto
//const newresult = budget > total ? tour=50: tour=20;
        // Presupuesto mayor que total ? --> tour=50 / Si no --> tour=20
const newresult = budget > total ? 100 : 20;
console.log(newresult);

const NUM= 30 + 3;
console.log(NUM);
const NUM1 = "30" + 3;
console.log(NUM1);

/* 
EJERCICIO 2-> 
Si la cadena es mas larga de 27 caracteres debo cortarla en 27,
en caso de que sea menor debo añadir caracteres 
*/ 

const code= "En un lugar de la Mancha, de cuyo nombre";

// Verificar la longitud de la cadena
if (code.length > 27) {
  // Si la cadena es más larga de 27 caracteres, cortarla
  const codigoCortado = code.slice(0, 27);
  console.log("Cadena cortada: " + codigoCortado);
} else if (code.length < 27) {
  // Si la cadena es menor de 27 caracteres, añadir caracteres
  const caracteresFaltantes = 27 - code.length;
  const caracteresAñadidos = "X".repeat(caracteresFaltantes); 
  const codigoAñadido = code + caracteresAñadidos;
  console.log("Cadena con caracteres añadidos: " + codigoAñadido);
} else {
  // La cadena ya tiene exactamente 27 caracteres
  console.log("La cadena tiene exactamente 27 caracteres: " + code);
}