const computador = {
  nome: "Computador do Alisson",
  idade: 3,
  ram: 4028,
  processador: {
    nome: "Intel",
    geracao: "10",
  },
};

const { nome, idade, ram } = computador;

console.log(nome, idade, ram);

const { nome: nomeDoComputador, idade: i, ram: r } = computador;

console.log(nomeDoComputador, i, r);

const { nome: n, idade: id, ram: ra, hd = "1T" } = computador;

console.log(nome, idade, ram, hd);

const {
  processador: { nome: nomeProcessador, geracao },
} = computador;

console.log(nomeProcessador, geracao);
