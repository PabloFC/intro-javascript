/**
 *  Ejercicio 31
 *  Algoritmo que lea un numero entero (altura) y a partir de el,cree
 *  una escalera invertida de asteriscos con esa altura.
 *  Debera quedar asi, si ponemos una altura de 5
 *  *****
 *   ****
 *    ***
 *     **
 *      *
 *
 *  Deberas recordar la concatenacion y el uso de espacio en blanco (\n)
 */

function crearTriangulo(altura) {
  //Escribe tu codigo aqui
  let escalera = "";
  for (let i = altura; i >= 1; i--) {
    // console.log(i);
    let asteriscos = "*".repeat(i);
    escalera += asteriscos + "\n";
    console.log(escalera);
  }
  // return escalera;
}

crearTriangulo(5);

module.exports = { crearTriangulo };
