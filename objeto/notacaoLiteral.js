const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c };
console.log(obj1, obj2);

const obj3 = new Object();
const atributo = "nota";
const valorAtributo = 7.0;

obj3[atributo] = valorAtributo;
console.log(obj3);

const obj4 = { [atributo]: valorAtributo };

console.log(obj4);

const obj5 = {
  funcao1: function () {},
  funcao2() {},
};
console.log(obj5);
