// Crie uma função que recebe um número (de 1 a 12) e retorne o mes correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2 mes.

const meses = {
  1: "Janeiro",
  2: "Fevereiro",
  3: "Março",
  4: "Abril",
  5: "Maio",
  6: "Junho",
  7: "Julho",
  8: "Agosto",
  9: "Setembro",
  10: "Outubro",
  11: "Novembro",
  12: "Dezembro",
};

function nomeDoMes(mes) {
  if (meses[mes] == undefined) {
    return console.log(`Mes invalido`);
  }
  return console.log(`${meses[mes]}`);
}

nomeDoMes(1);
nomeDoMes(0);
nomeDoMes(4);
