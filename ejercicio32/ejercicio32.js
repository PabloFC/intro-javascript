/**
 *  Ejercicio 32
 * El siguiente es el menu de un restaurante de bocadillos. Diseñar un algoritmo
 * capaz de leer el numero de unidades consumidas de cada alimento ordenado y
 * calcular la cuenta total. Vamos a suponer que los precios son fijos, es decir,
 * que son constantes.
 *
 * Bocadillo de jamon: 1,5e
 * Refresco 1,05e
 * Cerveza: 0,75e
 * Pan: 2e
 *
 * Debera retornar un string que diga lo siguiente: `El precio total es de X`
 */

function menuRestaurante(bocadillos, refrescos, cervezas, pan) {
  const precioBocadillo = 1.5;
  const precioRefresco = 1.05;
  const precioCerveza = 0.75;
  const precioPan = 2;

  const total =
    bocadillos * precioBocadillo +
    refrescos * precioRefresco +
    cervezas * precioCerveza +
    pan * precioPan;

  return `El precio total es de ${total}`;
}

module.exports = { menuRestaurante };
