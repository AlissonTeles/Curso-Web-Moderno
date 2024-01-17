// 19)O cardápio de uma lanchonete é o seguinte: Código Descrição do Produto Preço 100 Cachorro Quente R$ 3,00 200 Hambúrguer Simples R$ 4,00 300 Cheeseburguer R$ 5,50 400 Bauru R$ 7,50 500 Refrigerante R$ 3,50 600 Suco R$ 2,80 Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.

function calcProductValueByCodeAndQtd(code, qtd) {
  if (
    isNaN(code) ||
    !isFinite(code) ||
    typeof code != "number" ||
    typeof qtd != "number"
  ) {
    return console.log("Invalid inputs!");
  }
  switch (code) {
    case 100:
      return console.log(`O Preço do cachorro quente ficou R$${3 * qtd}`);
    case 200:
      return console.log(`O Preço do Hambúrger ficou R$${4 * qtd}`);
    case 300:
      return console.log(`O Preço do CheeseBurguer ficou R$${5.5 * qtd}`);
    case 400:
      return console.log(`O Preço do Bauru ficou R$${7.5 * qtd}`);
    case 500:
      return console.log(`O Preço do Refrigerante ficou R$${3.5 * qtd}`);
    case 600:
      return console.log(`O Preço do suco ficou R$${2.8 * qtd}`);
    default:
      return "Produto não existe!";
      break;
  }
}

calcProductValueByCodeAndQtd(100, 30);
calcProductValueByCodeAndQtd(200, 30);
calcProductValueByCodeAndQtd(300, 30);
calcProductValueByCodeAndQtd(400, 30);
calcProductValueByCodeAndQtd(500, 30);
calcProductValueByCodeAndQtd(600, 30);
calcProductValueByCodeAndQtd(700, 30);
calcProductValueByCodeAndQtd("800", "30");
calcProductValueByCodeAndQtd(30);
calcProductValueByCodeAndQtd("30");
calcProductValueByCodeAndQtd(null, 30);
