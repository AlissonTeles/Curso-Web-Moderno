// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function showDivisionAndRestDivision(dividendo, divisor) {
  if (
    isNaN(dividendo) ||
    isNaN(divisor) ||
    !isFinite(dividendo) ||
    !isFinite(divisor)
  ) {
    // throw new Error("Invalid Input")
    return "Invalid Input";
  }
  if (divisor == 0) {
    return "Not div for zero";
  }

  return `A divisão de ${dividendo} por ${divisor} é ${
    dividendo / divisor
  } dando resto igual a ${dividendo % divisor}`;
}

console.log(showDivisionAndRestDivision(10, 5));
console.log(showDivisionAndRestDivision(5, 10));
console.log(showDivisionAndRestDivision(-10, 5));
console.log(showDivisionAndRestDivision("a", 5));
console.log(showDivisionAndRestDivision(5, "a"));
console.log(showDivisionAndRestDivision(5, 0));
console.log(showDivisionAndRestDivision(0, 5));
