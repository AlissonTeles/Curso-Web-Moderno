Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ["Alisson", "Arthur", "Victorio"]

aprovados.forEach2(function (valor, index, array){
    console.log(`${index + 1}) ${valor}`)
    console.log(array)
})