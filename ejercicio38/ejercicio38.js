/**
 * Ejercicio 38
 * Desarollar un algoritmo que nos retore el array introducido por
 * parametros invertido.
 */

function invertArray(array) {
  const reversedArray = array.reverse();
  return reversedArray;
}
invertArray([1, 2, 3, 4]);

module.exports = { invertArray };
