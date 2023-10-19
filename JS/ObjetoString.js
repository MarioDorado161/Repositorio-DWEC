const cadena="Esto es una cadena";
const objetocadena= new String("Esto es una cadena");

console.log(typeof cadena);
console.log(typeof objetocadena);

console.log(cadena === objetocadena); // FALSO
console.log(cadena == objetocadena); // VERDADERO

console.log(cadena.toUpperCase());
console.log(objetocadena.toUpperCase());

