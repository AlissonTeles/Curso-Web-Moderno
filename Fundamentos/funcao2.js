// Função em uma váriavel
const sumValues = function (a, b) {
  console.log(a + b);
};

sumValues(1, 2);

// Arrow Function
const returnSum = (a, b) => {
  return a + b;
};
console.log(returnSum(3, 4));

const reallyShortReturnSum = (a, b) => a + b;
console.log(reallyShortReturnSum(5, 6));
