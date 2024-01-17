// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function calcChildrenHeight(height1, fee1, height2, fee2) {
  const heights = [height1, height2];
  const fees = [fee1, fee2];
  for (let i = 1; i < heights.length; i++) {
    if (typeof heights[i] != "number" || typeof fees[i] != "number") {
      return console.log("Invalid inputs");
    }
  }

  let lowHeight = Math.min(height1, height2);
  let hightHeight = Math.max(height1, height2);
  let ano = 0;
  if (
    (height1 > height2 && fee1 > fee2) ||
    (height2 > height1 && fee2 > fee1)
  ) {
    return console.log(
      `A criança de altura ${lowHeight} nunca vai ser maior que a criaça de altura ${hightHeight}`
    );
  }

  if (height1 > height2) {
    while (height2 < height1) {
      height2 = height2 + (height2 * fee2) / 100;
      ano++;
    }
  } else {
    while (height1 < height2) {
      height1 = height1 + (height1 * fee1) / 100;
      ano++;
    }
  }
  console.log(`Demorou ${ano} anos para a passar da altura`);
}

calcChildrenHeight(1.75, 1, 1.64, 1.2);
calcChildrenHeight(150, 2, 130, 4);
