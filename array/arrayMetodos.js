const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // Mesmo sendo constante podemos modificar o array, mas não pilotos
pilotos.pop() // Remove ultimo
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove primeiro
console.log(pilotos)

pilotos.unshift('Massa')
console.log(pilotos)

// Adiciona
pilotos.splice(2, 0, 'Bottas', 'Hamilton')
console.log(pilotos)

// Remove
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)