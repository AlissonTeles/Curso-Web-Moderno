// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

const notas = [3.5, 6.8, 8.2, 9.5, 4.7];

function conceitoNotas(listNotas) {
  if (typeof listNotas != "object") {
    return console.log("Invalid input");
  }

  for (let i = 0; i < listNotas.length; i++) {
    let conceito =
      listNotas[i] <= 0 || listNotas[i] <= 4.9
        ? "D"
        : listNotas[i] >= 5 && listNotas[i] <= 6.9
        ? "C"
        : listNotas[i] >= 7 && listNotas[i] <= 8.9
        ? "B"
        : listNotas[i] >= 9 && listNotas[i] <= 10.0
        ? "A"
        : "Error";
    console.log(`A ${i + 1}* nota ${listNotas[i]} é conceito ${conceito}`);
  }
}

conceitoNotas(notas);
