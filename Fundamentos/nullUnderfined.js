let value;
console.log(value);

value = null;
console.log(value);

const celular = {};
console.log(celular.memoria);

celular.memoria = undefined;
console.log(!!celular.memoria);
console.log(celular);

celular.memoria = null;
console.log(!!celular.memoria);
console.log(celular);
