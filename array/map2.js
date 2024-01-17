const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.45}',
    '{ "nome": "Kit de Lápis", "preco": 41.45}',
    '{ "nome": "Caneta", "preco": 7.45}',
]

// Retorne um array só com os preços usando map

const prices = carrinho.map(el => JSON.parse(el).preco)
console.log(prices)
