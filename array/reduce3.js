Array.prototype.reduce2 = function (callback, initialValue) {
    let acumulador = initialValue > 0 ? initialValue : 0
    for (let i = 0; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}


const alunos = [
    {nome: "Jão", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 6.1, bolsista: true},
    {nome: "Alisson", nota: 2.9, bolsista: false},
    {nome: "Ana", nota: 9.6, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 2)
console.log({resultado})


const resultado2 = alunos.map(a => a.nota).reduce2(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 2)

console.log({resultado2})