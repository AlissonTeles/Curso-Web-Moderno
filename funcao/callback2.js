const notas = [7.7, 5.4, 3.4, 9.0, 7.1, 10.0];

let notasAltas = [];
for (let i in notas) {
  if (notas[i] > 7.0) {
    notasAltas.push(notas[i]);
  }
}

console.log({ notasAltas });

notas.forEach((nota) => (nota > 7.0 ? console.log(nota) : ""));

let notasBaixas = notas.filter((nota) => nota < 7);
console.log({ notasBaixas });

const notasMenoresQueSete = (nota) => nota < 7;
const notasBaixas2 = notas.filter(notasMenoresQueSete);
console.log({ notasBaixas2 });
