const obj1 = {};
obj1.nome = "Nome do objeto";
obj1.preco = 499999.1;
obj1["Descricao"] = "Muito bom";
console.log(obj1);

const obj2 = {
  "nome": "Celular",
  preco: 1998.99,
  obj: {
    nome: "Sim",
    obj: {
        nome: "Agora complicou"
    }
  }
};
console.log(obj2)