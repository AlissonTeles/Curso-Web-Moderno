// 17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo: Plano Aumento A 10% B 15% C 20% Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function getNewSalary(salary, plan) {
  if (isNaN(salary) || !isFinite(salary) || typeof salary !== "number") {
    return console.log("Invalid Salary");
  }

  if (typeof plan !== "string") {
    return console.log("Invalid plan type");
  }
  switch (plan.toUpperCase()) {
    case "A":
      return console.log(`Seu novo salário é ${salary + (salary * 10) / 100}`);
    case "B":
      return console.log(`Seu novo salário é ${salary + (salary * 15) / 100}`);
    case "C":
      return console.log(`Seu novo salário é ${salary + (salary * 20) / 100}`);
    default:
      return console.log("Invalid Plan");
  }
}

getNewSalary(1000, "A");
getNewSalary(1000, "b");
getNewSalary(1000, "C");
