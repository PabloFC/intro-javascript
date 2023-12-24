/**
 *  Ejercicio 21
 *  Algoritmo que lea un array hasta que reciba un 0, y
 *  nos muestre el máximo, el mínimo y la media de todos
 *  ellos. Piensa como debemos inicializar las variables.
 */

function maxMinAverageUntilZero(array) {
  //Escribe tu codigo aqui
  let min = array[0];
  let max = array[0];
  let sum = 0;
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      break;
    }

    if (array[i] > 0) {
      sum += array[i];
      counter++;

      if (array[i] > max) {
        max = array[i];
      } else if (array[i] < min) {
        min = array[i];
      }
    }
  }
  let average = sum / counter;
  return { max, min, average };
}

maxMinAverageUntilZero([66, 36, 0, 6, 120]);

module.exports = { maxMinAverageUntilZero };
