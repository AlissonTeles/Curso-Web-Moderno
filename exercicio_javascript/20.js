// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function mostrarCedulasNecessarias(valor) {
  let cedulas = [];
  const notas = [200, 100, 50, 10, 5, 1];
  notas.forEach((no) => {
    [valor, cedulas] = returnValueAndCedulasCalc(valor, cedulas, no);
  });
  let phare = "";
  cedulas.forEach((cel) => {
    phare += ` ${cel.qtd} nota(s) de R$ ${cel.nota}.`;
  });
  console.log(phare.trim());
}

mostrarCedulasNecessarias(78);
mostrarCedulasNecessarias(153);

function returnValueAndCedulasCalc(valor, cedulas, nota) {
  if (valor >= nota) {
    cedulas.push({
      nota: nota,
      qtd: Math.floor(valor / nota),
    });
    valor = valor - nota * Math.floor(valor / nota);
  }

  return [valor, cedulas];
}
