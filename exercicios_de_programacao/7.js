// Crie uma função que receba quatro números como parâmetro(numero,minimo,maximo,inclusivo)e retorne se o parâmetro numero(o primeiro)está entre minimo e maximo.Quando o parâmetro inclusivo for true,tenha "entre" como inclusivo,ou seja,considerando se numero é igual a minimo ou a maximo.Caso o parâmetro inclusivo não seja informado,seu valor padrão deverá ser false, portanto,a lógica será exclusiva,não considerando se numero é igual a minimo ou a maximo.

function estaEntre(numero, minimo, maximo, inclusive) {
  if (minimo > maximo) {
    return console.log("O minimo não pode ser maior que o máximo");
  }

  if (inclusive) {
    return console.log(numero >= minimo && numero <= maximo);
  } else {
    return console.log(numero > minimo && numero < maximo);
  }
}
estaEntre(10, 5, 100);
estaEntre(16, 100, 160);
estaEntre(3, 3, 15);
estaEntre(3, 3, 15, true);
estaEntre(10, 500, 100);
