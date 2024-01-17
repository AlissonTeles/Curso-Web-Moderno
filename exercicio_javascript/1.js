//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function sumSubMultDiv(x, y) {
  console.log(`Sum: ${x + y}\nSub: ${x - y}\nMult: ${x * y}\nDiv: ${x / y}`);
}

sumSubMultDiv(1, 2);
sumSubMultDiv(6, 10);

const sumSubMultDiv2 = (x, y) =>
  console.log(`Sum: ${x + y}\nSub: ${x - y}\nMult: ${x * y}\nDiv: ${x / y}`);

sumSubMultDiv2(1, 2);
sumSubMultDiv2(10, 2);
