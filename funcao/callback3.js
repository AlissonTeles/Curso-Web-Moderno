// Exemplo de Callback no Browser
document.getElementsByTagName("body")[0].onclick = function (e) {
  console.log("O evento ocorreu!");
  console.log(e);
};
