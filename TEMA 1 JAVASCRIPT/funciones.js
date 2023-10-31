
/* FUNCION ANONIMA */

let funcion=function(parametro){
    return parametro=":)";
}
console.log(funcion("Hola"));

/* CALLBACK */ //-> Programacion funcional

function getIdentificacion(numero,letra,callback) {
    let Identificacion= callback (numero,letra);
    return identificacion;
}

let formatoNIF = function(numero,letra){
  return numero + "-" + letra;
}

let formatoNIE=function(numero,letra){
    return letra + "-" + numero;
}

console.log(getIdentificacion("03942896","Y",formatoNIF))

/* FORMA MAS USADA DE CALLBACK */

function getIdentificacion2(numero,letra,callback) {
    let identificacion = callback(numero,letra);
    return identificacion;
}
getIdentificacion2("03942896","Y",function(numero,letra) {
    console.log(numero+"-"+letra)
});

/* FUNCIONES AUTOINVOCADAS */

(function(numero,letra){
    console.log(numero+"-"+letra)
})("03942896","Y")

