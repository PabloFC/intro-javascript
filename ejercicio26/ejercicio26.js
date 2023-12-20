/**
 *  Ejercicio 26
 *  Desarrollar un algoritmo que lea un array de 10 numeros y
 *  calule el cubo de cada uno de ellos. Recuerda la estructura For;
 */

function cuboNumerosArray() {
  let array = [];
  for (let i = 1; i <= 10; i++) {
    array[i] = i * i * i;
    console.log(`El cubo de ${i} es ${array[i]}`);
  }
  return array;
}

module.exports = { cuboNumerosArray };
