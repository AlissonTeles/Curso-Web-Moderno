// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function whichDayis(day) {
  if (isNaN(day) || !isFinite(day)) {
    return "Dia inválido";
  }
  switch (day) {
    case 1:
    case 7:
      return "Fim de semana";
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Dia útil";
    default:
      return "Dia inválido";
  }
}

console.log(whichDayis(1));
console.log(whichDayis(2));
console.log(whichDayis(3));
console.log(whichDayis(4));
console.log(whichDayis(5));
console.log(whichDayis(6));
console.log(whichDayis(7));
console.log(whichDayis(8));
console.log(whichDayis("a"));
