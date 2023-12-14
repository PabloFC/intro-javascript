/**
 *  Ejercicio 11
 *  En una tienda efectuan un descuento a los clientes dependiendo de la cantidad
 *  de la compra. El descuento se basa en lo siguiente:
 *
 *  Si el monto es menor que 500€ -> No hay descuento
 *  Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
 *  Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
 *  Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
 *  Más de 15.000€ -> 25% descuento
 *
 *  El algoritmo recibira la cantidad y retornara el precio final aplicandole el
 *  descuento correspondiente.
 */

function descuentoCompra(cantidad) {
  //Escribe tu codigo aqui
  if (cantidad < 500) {
    return cantidad;
  } else if (cantidad >= 500 && cantidad <= 1000) {
    return cantidad * 0.95;
  } else if (cantidad >= 1000 && cantidad <= 7000) {
    return cantidad * 0.9;
  } else if (cantidad >= 7000 && cantidad <= 15000) {
    return cantidad * 0.8;
  } else if (cantidad > 15000) {
    return cantidad * 0.75;
  }
}

module.exports = { descuentoCompra };
