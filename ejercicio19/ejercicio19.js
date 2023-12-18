/**
 *  Ejercicio 19
 *  Dado un array de numeros indefinidos, que acabe con un -1, realizar un algoritmo
 *  que nos calcule la media aritmetica de estos sin contar el -1. Suponemos que
 *  el usuario no insertará numeros negativos.
 */

function mediaArrayHastaMenosUno(array) {
  //Escribe tu codigo aqui
  let suma = 0;
  let positivos = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === -1) {
      break;
    }

    if (array[i] > 0) {
      suma += array[i];
      positivos++;
    }
  }

  if (positivos > 0) {
    let media = suma / positivos;
    return media;
  } else {
    return 0;
  }
}

// mediaArrayHastaMenosUno([6, 6, 6, 6, -1]);
module.exports = { mediaArrayHastaMenosUno };
