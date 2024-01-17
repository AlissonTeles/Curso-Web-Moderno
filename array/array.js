console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Alisson', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Alisson', 'Ana'] //
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Undefined


aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Manoel'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1]) // Undefined
console.log(aprovados[2]) // ainda tem
console.log(aprovados) // ainda tem

aprovados = ['Bia', 'Carlos', 'Abia']
aprovados.splice(1, 1)
console.log(aprovados)
aprovados.splice(0, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)