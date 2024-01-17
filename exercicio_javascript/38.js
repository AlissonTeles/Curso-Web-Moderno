// 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

function pegaNumerosImparesEmLista(inicio = 0, fim = 100) {
  if (typeof inicio != "number" || typeof fim != "number") {
    return console.log("Invalid input");
  }

  if (inicio > fim) {
    [fim, inicio] = [inicio, fim];
  }

  for (let i = inicio; i < fim; i++) {
    i % 2 == 1 ? console.log(i) : i;
  }
}

pegaNumerosImparesEmLista(19, 3);
