// Cadeia de protótipos (prototype chain)
Object.prototype.att0 = "eu";
const avo = { att1: "oi" };
const pai = { __proto__: avo, att2: "eae", att3: "asd" };
const filho = { __proto__: pai, att3: "beleza" };
console.log(filho.att1);

console.log(filho.att2);

console.log(filho.att3);
console.log(filho.att0);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `Velocidade atual ${this.velAtual} e velocidade máxima ${this.velMax}`;
  },
};

const ferrari = {
  modelo: "F40",
  velMax: 324, // Shadowing
};

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());
