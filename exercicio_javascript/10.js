// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.

const isDivideForThree = (num) => {
  if (isNaN(num) || !isFinite(num)) {
    return "Invalid Number";
  }

  return num % 3 == 0 ? true : false;
};

console.log(isDivideForThree(3));
console.log(isDivideForThree(5));
console.log(isDivideForThree(15));
console.log(isDivideForThree(20));
console.log(isDivideForThree(-10));
console.log(isDivideForThree("asdas"));
console.log(isDivideForThree("?"));
