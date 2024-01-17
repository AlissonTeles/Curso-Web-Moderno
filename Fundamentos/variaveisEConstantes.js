var a = 3;
let b = 4;
const c = 5;
var a = 30;
b = 40;
// c = 50 Error
console.log(a, b, c);
// Troca os valores
[a, b] = [b, a];

console.log(a, b, c);

{
  let d = 10;
  var e = 20;
  console.log(d, e);
}
// console.log(d) X Error
console.log(e);
