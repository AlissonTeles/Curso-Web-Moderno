// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

function simpleCalculator(num1, operation, num2) {
  if (
    isNaN(num1) ||
    !isFinite(num1) ||
    isNaN(num2) ||
    !isFinite(num2) ||
    typeof num1 != "number" ||
    typeof num2 != "number"
  ) {
    return console.log("Invalid Numbers");
  }

  if (typeof operation !== "string") {
    return console.log("Invalid Operation");
  }

  switch (operation) {
    case "+":
      return console.log(num1 + num2);
    case "-":
      return console.log(num1 - num2);
    case "*":
      return console.log(num1 * num2);
    case "/":
      return console.log(num1 / num2);
    default:
      return console.log("Invalid Operation");
  }
}

simpleCalculator(2, "+", 2);
simpleCalculator(2, "-", 2);
simpleCalculator(2, "*", 2);
simpleCalculator(2, "/", 2);
simpleCalculator(2, " ", 2);
simpleCalculator("2", "+", 2);
