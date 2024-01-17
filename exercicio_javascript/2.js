//02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function typeOfTriangle(x, y, z) {
  if (x <= 0 || y <= 0 || z <= 0 || isNaN(x) || isNaN(y) || isNaN(z)) {
    // throw new Error("Invalid Input")
    return "Error";
  }

  if (x === y && y === z) {
    return "Equilátero";
  } else if (x === y || x === z || y === z) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

console.log(typeOfTriangle(6, 6, 6));
console.log(typeOfTriangle(5, 6, 6));
console.log(typeOfTriangle(6, 5, 6));
console.log(typeOfTriangle(6, 6, 5));
console.log(typeOfTriangle(4, 5, 6));
console.log(typeOfTriangle(4, 5, -10));
console.log(typeOfTriangle("a", 5, 6));
