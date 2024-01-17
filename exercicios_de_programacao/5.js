// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo

function maiorOuIgual(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return console.log(false);
  }
  return console.log(`${n1 >= n2}`);
}

maiorOuIgual(0, 0); // true
maiorOuIgual(0, "0"); // false
maiorOuIgual(5, 1); // false
