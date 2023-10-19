
const alerta=document.querySelector(".alert-info");
const objeto= new Object();
objeto.nombrepropiedad;
//objeto.nombrefuncion([parametro]);

let fecha_actual= new Date();
let fechafin = new Date(2023,4,31);

console.log(`La fecha actual es ${fecha_actual}`);
console.log(`La fecha de cierre es ${fechafin}`);

let tiempo_retrasado=fechafin - fecha_actual;
console.log(`El curso acaba dentro de: ${tiempo_retrasado}`);

console.log(fecha_actual.toString());
console.log(fecha_actual.toTimeString());
console.log(fecha_actual.toDateString());

console.log(fecha_actual.toLocaleString());
console.log(fecha_actual.toLocaleDateString());
console.log(fecha_actual.toLocaleDateString("es-ES",{weekday:`long`,year:`numeric`,mont:`long`,day:`numeric`}))

const fecha_actual_legible =fecha_actual.toLocaleDateString("es-ES",{weekday:`long`,year:`numeric`,mont:`long`,day:`numeric`})
alerta.innerHTML="<strong> HOY ES </strong>" + fecha_actual_legible
