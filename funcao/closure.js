// Closure é o escopo criado quando uma função é declarada

const x = "Global";
// Ele pega o contexto lexico
function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());
