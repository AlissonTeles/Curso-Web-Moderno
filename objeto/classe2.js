class Avo {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(nome, sobrenome, profissao = "Programador") {
    super(nome, sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super("Antonio", "Alisson");
  }
}

const filho = new Filho();
console.log(filho);
