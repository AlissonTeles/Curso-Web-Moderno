// 11) As regras para o cálculo dos anos bissextos são as seguintes: De 4 em 4 anos é ano bissexto; De 100 em 100 anos não é ano bissexto; De 400 em 400 anos é ano bissexto; Prevalecem as últimas regras sobre as primeiras. Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retornando true ou false.

function eAnoBixesto(year) {
  if (year <= 0) {
    return false;
  }
  if (year % 400 == 0) {
    return true;
  } else if (year % 100 == 0) {
    return true;
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(eAnoBixesto(0));
console.log(eAnoBixesto(4));
console.log(eAnoBixesto(100));

console.log(eAnoBixesto(1900));
console.log(eAnoBixesto(2023));
console.log(eAnoBixesto(1988));
console.log(eAnoBixesto(2024));
console.log(eAnoBixesto(2001));
