console.log(Math.floor(6.4));

const firstObj = {};
firstObj.name = "Alisson";
// firstObj['name'] = "Teles" tanto faz
console.log(firstObj.name);

function Obj(nome) {
  this.name = nome;
  this.poor = function () {
    return "Your jodans are fake";
  };
}

const firstObj2 = new Obj("Teles");

console.log(firstObj2.name);
console.log(firstObj2.poor);
