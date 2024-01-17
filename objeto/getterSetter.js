const valor = {
  _valor: 1, // Convenção
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

console.log(valor.valor, valor.valor);
valor.valor = 1000;
console.log(valor.valor, valor.valor);
valor.valor = 1000;
