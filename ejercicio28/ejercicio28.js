/**
 *  Ejercicio 28
 *  Desarrollar un timer o temporizador. La cantidad de segundos con la que se
 *  quiere hacer la cuenta atras se introducira por parametros. Se ira mostrando
 *  la cuenta atras por consola y cuando llegue al final, se imprimira "Ring!! y el programa acabara .
 */

function timer(segundos) {
  for (let i = segundos - 1; i >= 0; i--) {
    console.log(i);
  }
  console.log("¡¡Ring!!");
}
timer(3);
module.exports = { timer };
