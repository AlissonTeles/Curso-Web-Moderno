// 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie também um default, que retornará uma mensagem de erro no console.

function pickAFruit(fruit) {
  switch (fruit) {
    case "maçâ":
      return console.log("Não vendemos esta fruta aqui");
    case "kiwi":
      return console.log("Estamos com escassez de kiwis");
    case "melancia":
      return console.log("Aqui está, são 3 reais o quilo");
    default:
      return console.log("Error");
  }
}

pickAFruit("maçâ");
pickAFruit("kiwi");
pickAFruit("melancia");
pickAFruit("asd");
pickAFruit(123);
