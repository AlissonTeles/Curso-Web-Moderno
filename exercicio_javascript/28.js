// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function mostrarParesEImpares(list) {
  if (typeof list != "object" || list.length < 0) {
    return console.log("Invalid input");
  }
  let pares = 0;
  let impares = 0;
  list.forEach((el) => {
    el % 2 == 0 ? pares++ : impares++;
  });
  console.log(
    `A quantidade de pares é ${pares} e a quantidade de impares é ${impares}`
  );
}

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
mostrarParesEImpares(numeros);
mostrarParesEImpares(1, 2, 3, 4, 5);
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
mostrarParesEImpares(vetor);
