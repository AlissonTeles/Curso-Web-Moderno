/**
 * Calculates the area of a rectangle.
 * If the calculated area is greater than 20, it logs a message to the console.
 * Otherwise, it returns the calculated area.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @returns {number} The calculated area of the rectangle.
 */
function area(width, height) {
  const area = width * height;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}`);
  } else {
    return area;
  }
}

console.log(area(2, 2));
console.log(area(2));
console.log(area());
console.log(area(2, 2, 4, 5));
console.log(area(10, 20));
