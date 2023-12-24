/** Ejercicio 34
 * a) Generar un numero aleatorio (del 1 al 10) que el usuario debe adivinar.
 * b) Crear un algoritmo que reciba un array con longitud 10 de numeros en el que utilizando un bucle
 *    while que calcule en que posicion del array se encuentra el numero que buscamos.
 *
 *  Si el numero aleatorio es 5 y tu array es [9,3,4,5,6,2,4] la solucion sera que has acertado
 *  al cuarto intento.
 */

function generateRandomNumber(userNum) {
  let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
  return randomNumber;
}

function playGame(randomNumber, arrayNum) {
  //Escribe tu codigo aqui
}

generateRandomNumber();
playGame([1, 3, 5, 3, 7, 9, 5, 3, 8, 9]);
module.exports = {
  generateRandomNumber,
  playGame,
};
