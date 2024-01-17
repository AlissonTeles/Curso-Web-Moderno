// Desenvolva uma função que recebe dois números inteiros não negativos(maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.

function multiplicar(n1, n2) {
  if (n1 < 0 || n2 < 0) {
    return console.log("Numero não pode ser negativo");
  }
  return console.log(Math.imul(n1, n2));
}

multiplicar(5, 5);
multiplicar(0, 5);
