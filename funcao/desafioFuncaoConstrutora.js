class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("João");
p1.falar();

function PessoaConstructor(nome) {
  this.nome = nome; // Adiciona o nome como uma propriedade da instância

  this.falarNome = function () {
    console.log(`Meu nome é ${this.nome}`);
  };
}

const p2 = new PessoaConstructor("João");
p2.falarNome();
