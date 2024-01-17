// 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

function formatNumber(number = 0) {
  if (Number.isNaN(number) || !Number.isFinite(number)) {
    //throw new Error("Invalid Input")
    return "Invalid Input";
  }
  return `R$${number.toFixed(2).replace(".", ",")}`;
  // return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

console.log(formatNumber(0.3));
console.log(formatNumber(0.1 + 0.2));
console.log(formatNumber(1 + 2));
console.log(formatNumber("a" + 2));
console.log(formatNumber(0 + 0));
