//22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function calculaAnuidadePeloMes(mes, valor) {
  if (
    typeof mes != "number" ||
    isNaN(mes) ||
    !isFinite(mes) ||
    typeof valor != "number" ||
    isNaN(valor) ||
    !isFinite(valor)
  ) {
    return console.log("Invalid inputs");
  }

  const juros = 5 / 100;
  let time = Math.abs(mes - 1);
  time = time == 12 ? 0 : time;
  let montante = valor * (1 + juros) ** time;
  console.log(montante.toFixed(2));
}

calculaAnuidadePeloMes(1, 100);
calculaAnuidadePeloMes(2, 100);
calculaAnuidadePeloMes(3, 100);
calculaAnuidadePeloMes(4, 100);
