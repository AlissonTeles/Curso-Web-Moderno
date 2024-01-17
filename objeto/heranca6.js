function Aula(nome, videoId) {
  this.nome = nome;
  this.videoId = videoId;
}

const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Remember, this is just a Theorie, a Game Theorie", 345);

console.log(aula1, aula2);
aula1.prototype;

function newNovo(f, ...params) {
  const obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, params);
  return obj;
}

const aula3 = newNovo(Aula, "Bem vindo", 123);
console.log(aula3);
