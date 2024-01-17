// Desenvolva uma função que recebe dois parametros, um é a quantidade de horas trabalhadas por um funcionário num mes, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X é quanto o funcionário ganhou no mês

function calcularSalario(qtdHoras, salarioPorHora) {
  return console.log(`${qtdHoras * salarioPorHora}`);
}
calcularSalario(150, 40.5);
