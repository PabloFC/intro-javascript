/**
 * Ejercicio 47
 * Generar un algoritmo que reciba un array y retorne otro con los numeros ordenados de forma descendente
 */

function ordenar(array) {
  let newArray = [];
  newArray = array.sort(function (a, b) {
    return b - a;
  });
  return newArray;
}

module.exports = { ordenar };
