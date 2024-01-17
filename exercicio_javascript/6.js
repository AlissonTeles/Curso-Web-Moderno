// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function calcJurosSimples(capitalInicial, taxaJuros, tempoAplicado) {
  if (isNaN(capitalInicial) || isNaN(taxaJuros) || isNaN(tempoAplicado)) {
    return "Invalid Inputs";
  }

  const jurosSimples = capitalInicial * (taxaJuros / 100) * tempoAplicado;

  return capitalInicial + jurosSimples;
}

function calcJurosCompostos(capitalInicial, taxaJuros, tempoAplicado) {
  if (isNaN(capitalInicial) || isNaN(taxaJuros) || isNaN(tempoAplicado)) {
    return "Invalid Inputs";
  }
  const jurosCompostos = (1 + taxaJuros) ** tempoAplicado;

  return capitalInicial * jurosCompostos;
}

const formatCurrency = (amount) => `R$ ${amount.toFixed(2)}`;

console.log(formatCurrency(calcJurosSimples(5000, 3, 10)));
console.log(formatCurrency(calcJurosCompostos(2000, 0.03, 4)));
