/**
 *  Ejercicio 9
 *  Construir un algoritmo que reciba 5 calificaciones de un alumno y retorne el promedio
 *  junto con la palabra "aprobado" (recuerda la concatenacion y el uso de ``) si el alumno tiene un promedio
 *  mayor o igual a 5, y "no aprobado" en caso contrario.
 *  En caso de que se introdujera alguno 'no numero' el algoritmo debera retornar un string
 *  diciendo 'Debes introducir sólo números. Inténtalo de nuevo'
 */

function notaMedia(nota1, nota2, nota3, nota4, nota5) {
  //Escribe tu codigo aqui
  let media = parseInt((nota1 + nota2 + nota3 + nota4 + nota5) / 5);

  if (
    isNaN(nota1) ||
    isNaN(nota2) ||
    isNaN(nota3) ||
    isNaN(nota4) ||
    isNaN(nota5)
  ) {
    return "Debes introducir solo numeros. Intentalo de nuevo";
  } else if (media >= 5) {
    return `${media} aprobado`;
  } else {
    return `${media} suspenso`;
  }
}

module.exports = { notaMedia };
