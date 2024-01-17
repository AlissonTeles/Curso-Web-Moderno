// Função em JS é First-Class Object (Citizens)
// Higher-order function

function fun1() {}

const fun2 = function () {};

const array = [
  function (a, b) {
    return a + b;
  },
  fun2,
  fun1,
];

console.log(array[0](4, 5));

const obj = {
  falar: function () {
    return "Oia";
  },
};

console.log(obj.falar());
console.log(obj.falar);

function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
});

function somando(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

somando(2, 3)(4);
const somaMais = somando(2, 3);
somaMais(4);
