// 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

const vetorInteiro = [1, 2, 3, 4];
const vetorString = ["123", "asd", "asdas", "nvbnvbn"];
const vetorDouble = [2.0, 3.4, 7.6, 12.0];

console.log(vetorDouble.concat(vetorInteiro));
console.log(vetorInteiro.concat(vetorInteiro));
console.log(vetorString.concat(vetorInteiro));
console.log(vetorString.concat(vetorDouble));
console.log(vetorString.concat(vetorDouble.concat(vetorInteiro)));
