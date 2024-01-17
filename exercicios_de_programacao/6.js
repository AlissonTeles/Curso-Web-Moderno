// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso.Por exemplo,se a entrada for false,retornará true.Se o parâmetro for numérico,o retorno será o número inverso.Por exemplo,se for fornecido 1,o retorno será -1.Se o parâmetro de entrada não for de nenhum dos tipo acima,retorne "booleano ou número esperados,mas o parâmetro é do tipo ...".

function inverso(inv) {
  if (typeof inv === "boolean") {
    return console.log(!inv);
  } else if (typeof inv === "number") {
    return console.log(inv > 0 ? -inv : Math.abs(inv));
  } else {
    return console.log(
      `Booleano ou número esperados, mas o parametro é do tipo ${typeof inv}`
    );
  }
}

inverso(true);
inverso("6");
inverso(-2000);
inverso("programacao");
inverso("true");
inverso(2000);
