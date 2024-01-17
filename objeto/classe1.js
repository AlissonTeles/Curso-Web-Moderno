class Lançamento {
  constructor(nome = "Genérico", valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }

  sumario() {
    let valorConsolidade = 0;
    this.lancamentos.forEach((l) => {
      valorConsolidade += l.valor;
    });
    return valorConsolidade;
  }
}

const salario = new Lançamento("Salário", 45000);
const contaDeLuz = new Lançamento("Luz", -1000);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());
