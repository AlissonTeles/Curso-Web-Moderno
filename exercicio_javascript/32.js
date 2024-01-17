// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function calcMediaAritmeticaDeLista(list) {
  if (typeof list != "object" || list.length == 0) {
    return console.log("Invalid input");
  }
  let sum = 0;
  list.forEach((el) => (sum += el));

  let media = sum / list.length;

  console.log(`A média é de ${media}`);
}

const numeros = [0, 1, 2, 3, 4, 5];
calcMediaAritmeticaDeLista(numeros);
