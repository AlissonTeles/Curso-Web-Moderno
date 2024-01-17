function constructionFunction() {}
console.log(constructionFunction.prototype);

const obj1 = new constructionFunction();
const obj2 = new constructionFunction();

console.log(obj1.__proto__ === obj2.__proto__);

constructionFunction.prototype.teste = "testando";
constructionFunction.prototype.pensar = function () {
  console.log(`Pensando... ${this.teste}`);
};

obj1.pensar();
obj2.teste = "Paz";
obj2.pensar();

// Resumindo
console.log(
  new constructionFunction().__proto__ === constructionFunction.prototype
);
console.log(constructionFunction.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
