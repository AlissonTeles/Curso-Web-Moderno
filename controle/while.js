function getInteriroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcao = getInteriroAleatorioEntre(-1, 10);
  console.log(`Opção escohida foi ${opcao}`);
}
