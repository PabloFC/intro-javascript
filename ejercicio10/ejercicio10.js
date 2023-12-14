/**
 *  Ejercicio 10
 *  Construir un algoritmo que reciba la categoria y el sueldo de un trabajador y
 *  calcule el aumento de sueldo correspondiente teniendo en cuenta la siguiente
 *  tabla.
 *
 *  Categoria 1 = Aumento del 15%
 *  Categoria 2 = Aumento del 10%
 *  Categoria 3 = Aumento del 6%
 *  Categoria 4 = Aumento del 3%
 *
 *  El algoritmo debera retornar el nuevo salario. Ten en cuenta que el sueldo del
 *  trabajador podria no entrar en ninguna categoria.
 */

function nuevoSalario(sueldo, cat) {
  switch (cat) {
    case 1:
      return (sueldo *= 1.15);
      break;

    case 2:
      return (sueldo *= 1.1);
      break;
    case 3:
      return (sueldo *= 1.06);
      break;
    case 4:
      return (sueldo *= 1.03);
      break;
    case 5:
      return sueldo;
      break;
  }
}

module.exports = { nuevoSalario };
