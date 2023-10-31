class persona {
  constructor(nombre, apellidos, poblacion, edad, estudios, carnetDeConducir) {
    if (typeof edad !== 'number' || typeof estudios !== 'string') {
      alert('Error: Los tipos de datos no son correctos.');
      return;
    }

    this.nombre = nombre;
    this.apellidos = apellidos;
    this.poblacion = poblacion;
    this._edad = edad; 
    this._estudios = estudios; 
    this.carnetDeConducir = carnetDeConducir;
  }

  // Getter para obtener la edad
  get edad() {
    return this._edad;
  }

  // Setter para establecer la edad
  set edad(nuevaEdad) {
    if (typeof nuevaEdad === 'number') {
      this._edad = nuevaEdad;
    } else {
      alert('Error: La edad debe ser un número.');
    }
  }

  // Getter para obtener los estudios
  get estudios() {
    return this._estudios;
  }

  // Setter para establecer los estudios
  set estudios(nuevosEstudios) {
    if (typeof nuevosEstudios === 'string') {
      this._estudios = nuevosEstudios;
    } else {
      alert('Error: Los estudios deben ser una cadena de texto.');
    }
  }
}
  