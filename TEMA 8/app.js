
const  promesa = new Promise((release, reject)=> {

    setTimeout(() =>{
        resolve("El servidor ha enviado los datos");
    },2000)

    setTimeout(() =>{
        resolve("El servidor ha fallecido");
    },6000)
});

ProcessingInstruction.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
});
console.log("No espera resolver la promesa");