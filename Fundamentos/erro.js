function tratarErrorELancar(error) {
  //throw new Error(";-;");
  throw {
    nome: error.name,
    msg: error.message,
    date: new Date(),
    triste: ";-;",
  };
}

function imprimirNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (error) {
    tratarErrorELancar(error);
  } finally {
    console.log("Eu sempre apareço");
  }
}

const obj = { nome: "Roberto" };
imprimirNome(obj);
