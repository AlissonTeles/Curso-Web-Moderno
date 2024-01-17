// Object.preventExtension não deixa entender mais um objeto
const produto = Object.preventExtensions({
  nome: "sim",
  preco: 10,
});

produto.nome = "TV";
produto.descricao = "40 polegadas";
console.log(produto);
delete produto.nome;
console.log(produto);

const pessoa = { nome: "Alisson", idade: 20 };

Object.seal(pessoa);
pessoa.sobrenome = "Teles";
pessoa.nome = "Antonio";
delete pessoa.idade;
console.log(pessoa);
