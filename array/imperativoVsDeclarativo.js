const alunos = [
    {nome: "Alisson", nota: 9.2},
    {nome: "Humberto", nota: 7.2},
]

// Imperativo
let total = 0
for (let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota
}
console.log(total / alunos.length)

// Declarativo
const total2 = alunos.map(el => el.nota).reduce((acumulado, current) => acumulado + current)
console.log(total2 / alunos.length)