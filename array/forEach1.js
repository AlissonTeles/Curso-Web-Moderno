const aprovados = ["Alisson", "Arthur", "Victorio"]

aprovados.forEach(function (valor, index, array){
    console.log(`${index + 1}) ${valor}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)