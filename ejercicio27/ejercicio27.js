/**
 *  Ejercicio 27
 *  Desarrollar un algoritmo que imprima la tabla de multiplicacion
 *  del numero N introducido por parametros. Para N = 13, el output seria:
 *  13,26....130;
 */

function tablaNumero(N) {
  //Escribe tu codigo aqui
  for (let i = 1; i <= 10; i++) {
    // console.log(`El numero ${N} x :${i} es=${N * i}`);
    console.log(N * i);
  }
}

tablaNumero(13);

module.exports = { tablaNumero };
