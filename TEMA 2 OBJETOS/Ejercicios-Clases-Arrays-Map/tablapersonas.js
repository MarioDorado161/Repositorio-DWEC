class TablaPersonas {
    constructor(personas) {
      this.personas = personas;
    }
  
    ordenarPorNombre() {
      this.personas.sort((a,b) => ( a.nombre>b.nombre ? 1 :-1 ));
    }
  
    mostrarEnPagina() {
      const tabla= document.createElement('table');
      tabla.innerHTML = 
      ` <tr>
          <th>Nombre</th>
          <th > Apellidos </th>
          <th> Población</th>
          <th> Edad </th>
           <th> Estudios</th>
          < th> Carnet de Conducir </th>
        </tr>
      `;
  
        this.personas.forEach((persona) => {
        tabla.innerHTML += `
          <tr>
            <td>${persona.nombre}</td>
            <td>${persona.apellidos}</td>
            <td>${persona.poblacion}</td>
            <td>${persona.edad}</td>
            <td>${persona.estudios}</td>
            <td>${persona.carnetDeConducir ? 'Sí' : 'No'}</td>
          </tr>
        `;
      } );
  
      document.body.appendChild( tabla );
      }
  }
  

  const personas = [
    new Persona('Juan ', 'Pérez', 'Madrid', 30, 'Licenciatura',true),
    new Persona(' Ana', ' González', 'Barcelona', 25, ' Grado ', false),
    new Persona('Carlos', 'López', 'Valencia', 40, 'Master', true)
];
  

  const tabla= new TablaPersonas(personas);
  

    tabla.ordenarPorNombre();
    tabla.mostrarEnPagina();
  