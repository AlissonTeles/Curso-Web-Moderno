const escola = [{
    nome: "Turma A1",
    alunos: [{
        nome: "Alisson",
        nota: 9.7
    }, {
        nome: "Milena",
        nota: 10
    }],
}, {
    nome: "Turma B1",
    alunos: [
        {
            nome: "Larissa",
            nota: 8.2
        },
        {
            nome: "Kaua",
            nota: 9.4
        }]
}]

const notasDosAlunosEscola = escola.map(turma => turma.alunos.map(aluno => aluno.nota))
console.log(notasDosAlunosEscola)


const notasDosAlunosEscolaFlatMap = escola.flatMap(turma => turma.alunos.map(aluno => aluno.nota))
console.log(notasDosAlunosEscolaFlatMap)

// Resumindo seria isso que o flatmap faz
Array.prototype.flatMap2 = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}