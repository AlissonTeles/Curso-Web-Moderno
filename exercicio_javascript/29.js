// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.

function ListIsIn1020Interval(list) {
  if (typeof list != "object" || list.length < 0) {
    return console.log("Invalid input");
  }

  let isIn10 = 0;
  let notIn10 = 0;
  for (let i = 0; i < list.length; i++) {
    list[i] >= 10 && list[i] <= 20 ? isIn10++ : notIn10++;
  }
  console.log(
    `Os valores que estão na lista são ${isIn10} e os que não estao são ${notIn10}`
  );
}

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 23, 24, 25, 26];
ListIsIn1020Interval(numeros);
ListIsIn1020Interval(1, 2, 3, 4, 5);
ListIsIn1020Interval();
