// Ela vai reduzindo uma lista até ficar só um, acumulando
// o valor

const alunos = [
    {nome: "Jão", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 6.1, bolsista: true},
    {nome: "Alisson", nota: 2.9, bolsista: false},
    {nome: "Ana", nota: 9.6, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)