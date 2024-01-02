/**
 * Ejercicio 41
 * Generar un algoritmo que genere un array aleatorio con longitud y numero maximo
 * introducido por parametros.
 *
 * Retornar el promedio de los numeros positivos, cuantos numeros son mayores que 0 y
 * el promedio de todos los numeros
 */

function generarArray(longitud, numMax) {
  let numbers = [];

  return (numbers = Array.from({ length: longitud }, () =>
    Math.floor(Math.random() * numMax)
  ));
}

//Me gusta cuando los ejercicios vienen resueltos en el test
function calculosArray(array) {
  let sumPositives = 0;
  let sumAll = 0;
  let positiveCount = 0;

  for (let i = 0; i < array.length; i++) {
    sumAll += array[i];
    if (array[i] > 0) {
      positiveCount++;
      sumPositives += array[i];
    }
  }

  const calculatedMayorQueCero = positiveCount;
  const calculatedPromedioPositivos =
    positiveCount === 0 ? 0 : sumPositives / positiveCount;
  const calculatedPromedioTodos =
    array.length === 0 ? 0 : sumAll / array.length;

  return {
    calculatedMayorQueCero,
    calculatedPromedioPositivos,
    calculatedPromedioTodos,
  };
}
generarArray(6, 8);
module.exports = { generarArray, calculosArray };
