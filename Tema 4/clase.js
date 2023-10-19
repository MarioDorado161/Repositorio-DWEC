/*    class Persona {
    constructor (nombre,apellidos,AnoNacimiento){
        this_nombre=nombre;
        this_apellidos=apellidos;
        this_AnoNacimiento=AnoNacimiento
    }

    get AñoNacimiento(){
        return this_AnoNacimiento;
    }
}

const P1 = new Persona("Kokito" , "Follacabras Gonzalez", "2003");

*/


class Persona {
    constructor (nombre,apellidos,AnoNacimiento,Estudios,Población){
        this_nombre=nombre;
        this_apellidos=apellidos;
        this_AnoNacimiento=AnoNacimiento
        this_Estudios=Estudios;
        this_Poblacion=Poblacion;
    }
 // Getter para el nombre
 get nombre() {
    return this._nombre;
}

// Setter para el nombre
set nombre(nombre) {
    this._nombre = nombre;
}

// Getter para los apellidos
get apellidos() {
    return this._apellidos;
}

// Setter para los apellidos
set apellidos(apellidos) {
    this._apellidos = apellidos;
}

// Getter para el año de nacimiento
get AnoNacimiento() {
    return this._AnoNacimiento;
}

// Setter para el año de nacimiento
set AnoNacimiento(AnoNacimiento) {
    this._AnoNacimiento = AnoNacimiento;
}

// Getter para los estudios
get Estudios() {
    return this._Estudios;
}

// Setter para los estudios
set Estudios(Estudios) {
    this._Estudios = Estudios;
}

// Getter para la población
get Población() {
    return this._Población;
}

// Setter para la población
set Población(Población) {
    this._Población = Población;
}
 
    
}