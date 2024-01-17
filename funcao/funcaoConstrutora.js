function Carro(velocidadeMaxima = 200, delta = 5) {
  // Privado (sem this)
  let velocidadeAtual = 0;
  // mas poderia ter
  // this.velocidadeAtual = 0

  // Metodos Publicos
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro();

uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(400, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
