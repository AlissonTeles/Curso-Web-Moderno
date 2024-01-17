function verNota(nota) {
  if (nota >= 7) {
    console.log("Aprovado com", nota);
  }
}

verNota(8);
verNota(6.9);

function seForVerdade(valor) {
  if (valor) {
    console.log("Isso é verdadeiro:", valor);
  }
}

seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade("");
seForVerdade(0);
seForVerdade("?");
