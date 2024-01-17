const funcsLet = [];

for (let i = 0; i < 10; i++) {
  funcsLet.push(function () {
    console.log(i);
  });
}

funcsLet[4]();
funcsLet[7]();
