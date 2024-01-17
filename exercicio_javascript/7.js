// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.

function bhaskara(ax2, bx, c) {
  if (
    typeof ax2 !== "number" ||
    typeof bx !== "number" ||
    typeof c !== "number"
  ) {
    return "Invalid inputs";
  }

  a = Number.parseInt(ax2);
  b = Number.parseInt(bx);
  c = Number.parseInt(c);

  delta = b ** 2 - 4 * a * c;
  if (delta < 0) {
    return "Delta é negativo";
  }

  sqrtDelta = Math.sqrt(delta);
  bha1 = ((-b + sqrtDelta) / 2) * a;
  bha2 = ((-b - sqrtDelta) / 2) * a;

  return [bha1, bha2];
}

console.log(bhaskara(1, -3, -54));
