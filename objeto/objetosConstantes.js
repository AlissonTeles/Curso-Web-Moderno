// pessoa -> 123 -> {...}
const pessoa = { nome: "joao" };
pessoa.nome = "Alisson";
console.log(pessoa);

// pessoa <- 456 -> {...}
// pessoa = { nome: "Pedro"} // Error
Object.freeze(pessoa);
pessoa.nome = "Pedro";
console.log(pessoa);
