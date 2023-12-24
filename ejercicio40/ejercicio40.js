/**
 * Ejercicio 40
 * Generar un array de 20 elementos con numeros aleatorios no repetidos entre si
 */

//EN ESTE HE UTILIZADO CHATGPT :)

function generarArrayNoRepetidos() {
  let array = [];

  while (array.length < 10) {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    if (array.indexOf(numeroAleatorio) === -1) {
      array.push(numeroAleatorio);
    }
  }

  return array;
}

module.exports = { generarArrayNoRepetidos };
