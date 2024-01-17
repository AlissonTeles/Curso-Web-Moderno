const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log("Perfeito");
    case 8:
    case 7:
    case 6:
      console.log("Boa");
    case 5:
    case 4:
    case 3:
      console.log("Melhore!");
    case 2:
    case 1:
    case 0:
      console.log("Reprovado!");
    default:
      console.log("Nota invalida");
  }
};
