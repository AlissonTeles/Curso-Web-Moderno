Array.prototype.map2 = function (callback) {
    let array = []
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this))
    }
    return array
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.45}',
    '{ "nome": "Kit de Lápis", "preco": 41.45}',
    '{ "nome": "Caneta", "preco": 7.45}',
]

// Retorne um array só com os preços usando map
//carrinho.map()
// carrinho.forEach()
const prices = carrinho.map2(el => JSON.parse(el).preco)
console.log(prices)
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const prices2 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(prices2)
