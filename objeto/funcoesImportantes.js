const produto = {
  nome: "Cadeira",
  preco: 100,
  peso: "3kg",
};

console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));

Object.entries(produto).forEach((e) => {
  console.log(`${e[0]}: ${e[1]}`);
});

Object.entries(produto).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(produto, "enviado?", {
  enumerable: true,
  writable: false,
  value: false,
});

console.log(produto);

const dest = { a: 1 };

const a = { b: 1 };
const b = { c: 1 };
const c = { b: 2, a: 3 };

Object.assign(dest, a, b, c);
console.log(dest);
