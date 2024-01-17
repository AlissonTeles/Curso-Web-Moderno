const produto = new Object();
produto.nome = "Mesa";
produto["preco"] = "10";

console.log(produto);

delete produto.preco;
console.log(produto);

const carro = {
  modelo: "A4",
  idade: 1998,
  condutores: [
    {
      nome: "Alisson",
      idade: 19,
    },
  ],
};

carro.condutores[0].idade = 20;
carro["condutores"][0]["nome"] = "Teste";

console.log(carro);
