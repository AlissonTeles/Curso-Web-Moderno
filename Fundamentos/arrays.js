const listOfValues = [1, 2, 3, 4];
console.log(listOfValues[0], listOfValues[4]);

listOfValues[4] = 10.2;
console.log(listOfValues[4]);

console.log(listOfValues.length);

listOfValues.push(
  {
    id: 3,
  },
  false,
  null,
  undefined,
  "teste",
  12
);

console.log(listOfValues);

console.log(listOfValues.pop());

delete listOfValues[0];

console.log(listOfValues);

console.log(typeof listOfValues);
