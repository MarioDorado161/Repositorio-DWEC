while (true) {
    // Solicitar un número al usuario
    var numero = prompt("Por favor, introduce un número para mostrar su tabla de multiplicar:");

    // Comprobar si el usuario canceló o ingresó un valor no numérico
    if (numero === null || isNaN(numero)) {
      alert("Por favor, introduce un número válido.");
    } else {
      // Convertir el valor a un número entero
      numero = parseInt(numero);

      // Mostrar la tabla de multiplicar
      document.write("<h2>Tabla de multiplicar del " + numero + ":</h2>");
      for (var i = 1; i <= 10; i++) {
        document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
      }
      break; // Salir del bucle si se introdujo un número válido
    }
  }