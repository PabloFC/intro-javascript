/**
 *  Ejercicio 17
 *  Crea un algoritmo que nos calcule la suma de los N primeros numeros
 *  naturales que seran introducidos como parametro de la funcion.
 *  La funcion retornara la suma.
 */

function calcularSumaNumerosNaturales(N) {
  //Escribe tu codigo aqui
  let suma = 0;
  for (let i = 0; i <= N; i++) {
    suma += i;
  }
  return suma;
}

calcularSumaNumerosNaturales([1, 2, 3, 4]);
module.exports = { calcularSumaNumerosNaturales };
