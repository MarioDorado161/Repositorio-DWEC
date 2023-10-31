//typeof
const num=20;
console.log("El tipo es: " + typeof num);


//NaN -> Not a Number
const variable=4 * "hola";
console.log(variable);
console.log("El tipo de variable es: " + variable);


//Infinity
const dicision = 4/0;
//console.log(division);
console.log("El tipo de division es: " + typeof division);


//isNaN -> Is not a number
const numberstring="30";
const string="20";
console.log(isNaN (variable));
//console.log(isNaN (division));
console.log(isNaN("12"));
console.log(isNaN(12));
console.log(isNaN(numberstring));
console.log(isNaN(string));
console.log(isNaN(NaN));

//toString
const number= 100;
console.log(number);
console.log(number.toString());
console.log(typeof number);
console.log(typeof number.toString());


//toField
//console.log(number.toField(4));


//Realizart un script que calcule cuanto toca 
//pagar a cada persona una cena de 102€ y asistieron
//6 personjas

// 1.- Definimos el costo total de la cena y el número de personas que asistieron
const costoTotalCena = 102; 
const numeroDePersonas = 6;
// Calculamos cuánto debe pagar cada persona
const costoPorPersona = costoTotalCena / numeroDePersonas;
// Mostramos el resultado
console.log("El costo por persona es de: " + costoPorPersona.toFixed(2) + " euros");


//Funcion Boolean devuelve verdadero
console.log(Boolean(0));
console.log(Boolean("Cosa"));
console.log(Boolean(3.24));
console.log(Boolean(100>5));
console.log("1" == 1);
console.log(Boolean(undefined));

//Concatenar texto
let nombre= "Pepe";
let apellido="Mosca";
let nombre_completo= nombre+" "+ apellido;
console.log(nombre_completo);

//Template literals
let curso="VS2DAW";
nombre_apellido=`Hola ${nombre} ${apellido}`;
console.log(nombre_apellido);
let saludo = `Hola ${nombre} ${apellido}, bienvenido al curso de VS2DAW`
console.log(saludo);

console.log(nombre.length);

//  .includes-> Subcadena
console.log(nombre.includes("bien55id"));
console.log(saludo.slice(12,17));

//   replace("este texto -> "por este otro")
console.log(saludo.replace("Pepe", "Fernando"));

//   .trin -> Elimina los espacios en blanco *(Quita solo el principio y final)
let cadena= "     Hola    mundo     "
console.log(cadena.trim());

