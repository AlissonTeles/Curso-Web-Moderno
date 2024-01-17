// Simples aula de escopo
{
  {
    {
      {
        {
          var teste = 1;
        }
      }
    }
  }
}

console.log(teste);

function testando() {
  var testandoFuncao = 2;
  console.log("Teste local", testandoFuncao);
}
testando();
// console.log(testandoFuncao);
