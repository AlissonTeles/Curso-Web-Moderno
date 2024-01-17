// Function declaration (It's hoist)
function soma(x, y) {
  return x + y;
}

// Function expression (Not hoist)
const sub = function (x, y) {
  return x - y;
};

// named functio n expression
const mult = function mult(x, y) {
  return x * y;
};
