// Usando notação literal

const obj1 = {};
console.log(obj1);
console.log(typeof obj1, typeof new Object());

// Object
const obj2 = new Object();
console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto("Caneta", 7.99, 0.15);
const p2 = new Produto("Garrafa", 10, 0.1);

console.log(p1, p2);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função Factory (fabrica)

function criarFuncionarios(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFuncionarios("Alisson", "2400", 0);
const f2 = criarFuncionarios("Alisson", "7000", 4);

console.log(f1, f2);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = "Rosinha";
console.log(filha);

// Uma função famosa que retornar Objeto...
const fromJson = JSON.parse('{"TESTE": "sOU JSON"}');
console.log(fromJson.TESTE);
