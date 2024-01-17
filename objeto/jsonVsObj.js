const obj = { a: 1, b: 2, c: 3 };
console.log(JSON.stringify(obj));

//console.log(JSON.parse("{ a: 1, b: 2, c: 3}"));  err
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")); err
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'));
console.log(
  JSON.parse('{ "a": 1.235, "b": "string", "c": true, "d": {}, "e": []}')
);
