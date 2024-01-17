let compareComThis = function (params) {
  console.log(this === params);
  console.log(this);
};

compareComThis(global);

const obj = {};
compareComThis = compareComThis.bind(obj);
compareComThis(global);
compareComThis(obj);

let compareComThisArrow = (params) => {
  console.log(this === params);
  console.log(this);
};
compareComThisArrow(global);
compareComThisArrow(module.exports);

compareComThisArrow = compareComThisArrow.bind(obj);
// Tentando forçar

compareComThisArrow(obj);
compareComThisArrow(module.exports);
