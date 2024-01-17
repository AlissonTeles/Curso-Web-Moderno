const notas = [1.2, 3.6, 9.0, 3.0, 10.0];

for (let i in notas) {
  console.log(i, notas[i]);
}

const celular = {
  nome: "Galaxy A11",
  armazenamento: "128GB",
};

for (let atributo in celular) {
  console.log(atributo + ":", celular[atributo]);
}
