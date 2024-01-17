Array.prototype.filter2 = function (callback) {
    let array = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, array)) {
            array.push(this[i])
        }
    }
    return array
}

// filter retorna uma nova array so que de tamanho diferente

const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "Mac Pro", preco: 10000, fragil: true},
    {nome: "Copo de plastico", preco: 12.49, fragil: false},
    {nome: "Copo de Vidro", preco: 20.00, fragil: true},
]

console.log(produtos.filter2(function (p) {
    return p.preco > 500 && p.fragil === true
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))