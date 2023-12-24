/**
 *  Ejercicio 29
 *  Desarrollar un algoritmo que calcule el factorial de un numero introducido por
 *  los parametros de la funcion.
 *
 *  El factorial de un numero N es la multiplicacion de todos los numeros desde 1 hasta N.
 *  Es decir, para N = 5, el factorial seria 5! = 5*4*3*2*1 = 120;
 */

function factorialNumero(n) {
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}

factorialNumero(5);

module.exports = { factorialNumero };
