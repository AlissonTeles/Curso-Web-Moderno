function comprasMercado(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // Bitwise xor
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete;

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
  // Mesma coisa:
  //  return {
  //  comprarSorvete: comprarSorvete,
  //  comprarTv50: comprarTv50,
  //  comprarTv32: comprarTv32,
  //  manterSaudavel: manterSaudavel,
  // };
}

console.log(comprasMercado(true, true));
console.log(comprasMercado(true, false));
console.log(comprasMercado(false, true));
console.log(comprasMercado(true, true));
