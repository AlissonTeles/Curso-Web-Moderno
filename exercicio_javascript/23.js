// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function calcStudentGrade(codAluno, grade1, grade2, grade3) {
  const grades = [grade1, grade2, grade3];
  for (let i = 1; i < grades.length; i++) {
    if (typeof grades[i] != "number" || grades[i] < 0 || grades[i] > 10) {
      return console.log("Invalid Grades");
    }
  }

  let biggestGrade = Math.max(grade1, grade2, grade3);
  let media = 0;
  if (biggestGrade == grade1) {
    media = calcMedia(grade1, grade2, grade3);
  } else if (biggestGrade == grade2) {
    media = calcMedia(grade2, grade1, grade3);
  } else if (biggestGrade == grade3) {
    media = calcMedia(grade3, grade1, grade2);
  }
  return console.log(
    `Código do Aluno: ${codAluno}. ${grade1}, ${grade2}, ${grade3} com média ${media.toFixed(
      2
    )} sendo ${media >= 5 ? "Aprovado" : "Reprovado"}`
  );
}

function calcMedia(biggestGrade, grade2, grade3) {
  return (biggestGrade * 4 + grade2 * 3 + grade3 * 3) / 10;
}

calcStudentGrade(123, 2.8, 6, 3.5);
calcStudentGrade(122, 4, 5, 6);
calcStudentGrade(111, 2, 7, 6);
calcStudentGrade(115, 2, 2, 2);
