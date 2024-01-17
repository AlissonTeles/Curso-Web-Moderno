// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

function calcPlanByAge(age) {
  if (typeof age != "number" || isNaN(age) || !isFinite(age) || age < 0) {
    return console.log("Invalid age");
  }
  if (age < 10) {
    return console.log(`O plano vale R$${100 + 80}`);
  } else if (age >= 10 && age < 30) {
    return console.log(`O plano vale R$${100 + 50}`);
  } else if (age >= 30 && age < 60) {
    return console.log(`O plano vale R$${100 + 95}`);
  } else if (age >= 60) {
    return console.log(`O plano vale R$${100 + 130}`);
  } else {
    return console.log(`Idade invalida`);
  }
}

calcPlanByAge(5);
calcPlanByAge(12);
calcPlanByAge(32);
calcPlanByAge(60);
calcPlanByAge(57);
calcPlanByAge("");
