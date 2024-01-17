// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

function negativeValuesList(list) {
  if (typeof list != "object" || list.length == 0) {
    return console.log("Invalid input");
  }

  let negative = 0;
  list.map((el) => {
    el < 0 ? negative++ : "";
  });

  console.log(`A quantidade de valores negativos é ${negative}`);
}

const numeros = [
  -1, -2, -5, -10, 1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 23, 24, 25, 26,
];
negativeValuesList(numeros);
