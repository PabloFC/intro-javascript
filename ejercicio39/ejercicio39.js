/**
 * Ejercicio 39
 * Desarollar un algoritmo que compruebe si los dos arrays introducidos son iguales
 */

function sonIguales(arrayUno, arrayDos) {
  let isEqual = arrayUno.toString() === arrayDos.toString();

  if (!isEqual) {
    return false;
  } else {
    return true;
  }
}

module.exports = { sonIguales };
