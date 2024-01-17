const funcsVar = [];

for (var i = 0; i < 10; i++) {
  funcsVar.push(function () {
    console.log(i);
  });
}

funcsVar[2]();
funcsVar[8]();
