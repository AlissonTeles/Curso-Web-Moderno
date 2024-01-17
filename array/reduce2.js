const alunos = [
    {nome: "Jão", nota: 7.3, bolsista: true},
    {nome: "Maria", nota: 6.1, bolsista: false},
    {nome: "Alisson", nota: 2.9, bolsista: false},
    {nome: "Ana", nota: 9.6, bolsista: false},
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = alunos.map(el => el.bolsista).reduce((antes, atual) =>
    antes && atual
)
console.log(todosBolsistas)

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = alunos.map(el => el.bolsista).reduce((antes, atual) =>
     antes || atual
)
console.log(algumBolsista)