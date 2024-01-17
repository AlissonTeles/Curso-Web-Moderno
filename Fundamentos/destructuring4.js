function random([min = 0, max = 10000]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(random([]));
console.log(random([30, 40]));
console.log(random([100, 30]));
