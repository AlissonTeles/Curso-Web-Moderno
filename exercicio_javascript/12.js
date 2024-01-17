//12) Faça um algoritmo que calcule o fatorial de um número

function fatorial(num) {
  if (isNaN(num) || !isFinite(num)) {
    return "Invalid Number";
  }

  if (num == 0) {
    return 1;
  }

  return num * fatorial(num - 1);
}

console.log(fatorial(3));
console.log(fatorial(0));
console.log(fatorial(1));
console.log(fatorial(5));
console.log(fatorial(10));
console.log(fatorial(8));
