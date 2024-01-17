const objArray = {0: "Alisson", 1: "Rinaldo", 2: "Victorio"}
Object.defineProperty(objArray, "toString", {
    value: function (){
        return Object.values(objArray)
    },
    enumerable: false
})

console.log(objArray[0])
const array = ["Alisosn", "Rinaldo", "Victorio"]
console.log(objArray.toString(), array)