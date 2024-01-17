console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);
console.log(typeof Number);

String.prototype.reverter = function () {
  return this.split("").reverse().join("");
};

console.log("Testando aqui".reverter());

Array.prototype.primeiro = function () {
  return this[0];
};

console.log([1, 2, 3, 4].primeiro());

String.prototype.toString = function () {
  return "Quebro tudo";
};

console.log("Agora quebrou".reverter());
