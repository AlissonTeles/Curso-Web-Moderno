// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function power(base, exponent) {
  if (isNaN(base) || isNaN(exponent))
    //throw new Error("Invalid Input");
    return "Invalid Input";
  return base ** exponent;
  // return Math.pow(base, exponent);
}

console.log(power(2, 5));
console.log(power(2, "a"));
console.log(power(2, 1));
console.log(power(2, -1));
console.log(power("a", 0));
