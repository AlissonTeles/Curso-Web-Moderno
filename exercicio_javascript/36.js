// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.

function multList(listNum, mult) {
  if (typeof listNum != "object" || typeof mult != "number") {
    return console.log("Invalid input");
  }

  const list = listNum.map((el) => el * mult);
  return multListAgain(list, mult);
}

function multListAgain(listNum, mult) {
  const list = listNum.map((el) => (el > 5 ? el * mult : el));
  return console.log(list);
}

const vetorOriginal = [2, 4, 6];
const numero = 3;

multList(vetorOriginal, numero);
