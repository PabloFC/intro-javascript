/**
 *  Ejercicio 23
 *  Leer tres números que denoten una fecha (día, mes, año) por
 *  parametros.
 *  Comprobar que es una fecha válida. Si no es válida escribir
 *  un mensaje de error que indique que se ha introducido mal
 *  alguna parte de la fecha y volver a pedir los números. Si es válida,
 *  escribir la fecha cambiando el número del mes por su nombre.
 *  Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero del 2006”.
 *  El año debe ser mayor que 0. (Recuerda la estructura switch).
 */

function fechaIntroducida(dia, mes, año) {
  if (
    dia > 0 &&
    dia <= 31 &&
    mes > 0 &&
    mes <= 12 &&
    año > 0 &&
    año % 4 == 0 &&
    año % 100 != 0 &&
    año % 400 == 0
    // &&
    // dia === 29 &&
    // mes === 2 &&
    // año % 4 != 0
  ) {
    switch (mes) {
      case 1:
        mes = "enero";
        return `${dia} de ${mes} del ${año}`;
      case 2:
        mes = "febrero";
        return `${dia} de ${mes} del ${año}`;
      // }

      case 3:
        mes = "marzo";
        return `${dia} de ${mes} del ${año}`;

      case 4:
        mes = "abril";
        return `${dia} de ${mes} del ${año}`;

      case 5:
        mes = "mayo";
        return `${dia} de ${mes} del ${año}`;

      case 6:
        mes = "junio";
        return `${dia} de ${mes} del ${año}`;

      case 7:
        mes = "julio";
        return `${dia} de ${mes} del ${año}`;

      case 8:
        mes = "agosto";
        return `${dia} de ${mes} del ${año}`;

      case 9:
        mes = "septiembre";
        return `${dia} de ${mes} del ${año}`;

      case 10:
        mes = "octubre";
        return `${dia} de ${mes} del ${año}`;

      case 11:
        mes = "noviembre";
        return `${dia} de ${mes} del ${año}`;

      case 12:
        mes = "diciembre";
        return `${dia} de ${mes} del ${año}`;

      default:
        return `Has introducido mal alguna parte de la fecha`;
    }
  } else {
    return "Has introducido mal alguna parte de la fecha";
  }
}

fechaIntroducida(19, 12, 2023);

module.exports = { fechaIntroducida };
