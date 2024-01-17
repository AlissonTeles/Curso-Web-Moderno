Number.prototype.estaEntre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

const imprimirResultado = function (nota) {
  if (nota.estaEntre(9, 10)) {
    console.log("Perfeito");
  } else if (nota.estaEntre(7, 8.99)) {
    console.log("Boa");
  } else if (nota.estaEntre(4, 6.99)) {
    console.log("Melhore!");
  } else if (nota.estaEntre(0, 3.99)) {
    console.log("Reprovado");
  } else {
    console.log("Nota inválida");
  }
};

imprimirResultado(7);
imprimirResultado(3);
imprimirResultado(10);
imprimirResultado(5);
