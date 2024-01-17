let teste = 3;

console.log(teste);

this.a = 10;
module.exports = { e: 123, f: false };

console.log(this.a);
console.log(global.a);
console.log(this === module.exports);
console.log(module.exports);

// Nunca faça isso:
abc = 3;
console.log(global.abc);
