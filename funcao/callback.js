const personagens = ["Darios", "Udyr", "Nami"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

// Funções usadas como argumento
personagens.forEach(imprimir);

personagens.forEach((personagens) => console.log(personagens));

personagens.forEach(function () {
  console.log(personagens);
});

personagens.forEach((personagens, indice) => {
  console.log(indice, personagens);
});
