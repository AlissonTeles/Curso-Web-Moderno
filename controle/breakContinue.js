const palavras = [
  "oi",
  "para",
  "sei la",
  "palavras",
  "testes",
  "sou o numero 4",
];

for (let s in palavras) {
  if (s == 3) break;
  console.log(`${s} = ${palavras[s]}`);
}

for (let s in palavras) {
  if (s == 3) continue;
  console.log(`${s} = ${palavras[s]}`);
}

rotulo: for (let a in palavras) {
  for (let b in palavras) {
    if (a == 2 && b == 3) break rotulo;
    console.log("A =", a, "B=", b);
  }
}
