// 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos , bem como a soma dos elementos.

function progressaoAritmetica(numTermos, a1, r) {
  const termoGeral = a1 + (numTermos - 1) * r;
  const somaNTermos = ((a1 + termoGeral) * numTermos) / 2;
  return console.log([termoGeral, somaNTermos]);
}

function progressaoGeometrica(numTermos, a1, r) {
  const termoGeral = a1 * r ** (numTermos - 1);
  const somaNTermos = a1 * (r ** numTermos - 1 / (r - 1));
  return console.log([termoGeral, somaNTermos]);
}

progressaoAritmetica(5, 3, 2);
progressaoGeometrica(5, 3, 2);
