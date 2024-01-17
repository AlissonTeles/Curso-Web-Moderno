const valor = "Global";

// Ela procura o local onde foi definida
function minhaFuncao() {
  console.log(valor);
}

function exec() {
  const valor = "Local";
  // E não onde foi chamada
  minhaFuncao();
}

exec();
