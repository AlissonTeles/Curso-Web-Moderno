// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function biggerAndSmallerList(list) {
  if (typeof list != "object" || list.length == 0) {
    return console.log("Invalid input");
  }

  const maior = Math.max(...list);
  const menor = Math.min(...list);

  console.log(`O menor valor é ${menor} e o maior valor é ${maior}`);
}

const numeros = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 23, 24, 25, 26];
biggerAndSmallerList(numeros);

vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];
biggerAndSmallerList(vetor);
