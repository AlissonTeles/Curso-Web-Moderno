const teste = "Testee3d";

console.log(teste.charAt(5));
console.log(teste.charAt(10));
console.log(teste.charCodeAt(3)); // Valor unicode
console.log(teste.indexOf("3"));

console.log(teste.substring(1));
console.log(teste.substring(3, 5));

console.log("Abrindo ".concat(teste).concat("!"));
console.log(teste.replace(/\d/g, "a"));
console.log(teste.replace(/\w/g, "a"));

console.log("Sim,Não,talves".split(","));
