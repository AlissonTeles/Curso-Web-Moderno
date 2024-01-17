const p1 = 1.0;
const p2 = "2.0";

console.log(typeof p1, typeof p2);
console.log(typeof p1, typeof Number(p2));

console.log(p1, Number(p2));
console.log(Number.isInteger(p1), Number.isInteger(Number(p2)));

const nota1 = 7.45;
const nota2 = 8.35;

const total = nota1 * p1 + nota2 * Number(p2);
console.log(total);
const media = total / (p1 + Number(p2));

console.log(media);
console.log(media.toFixed(2));
console.log(typeof media);
console.log(typeof Number);
