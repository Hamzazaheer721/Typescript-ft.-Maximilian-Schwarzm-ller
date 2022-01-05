////////////////////////////////
//////// EXTRA ////////////////
//////////////////////////////

const rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo']
// it will slice the array from 0 till 2 index but won't include value at 2nd index

console.log(rainForests.splice(0, 2)) // ["Amazon", "Borneo"]
console.log(rainForests) // ["Cerrado, "Congo"]

// in case of slice, we are return shallow copy of the portion of an array to new array object selected from start to end(end not included)
// hence original array is not modified
const _rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo']
console.log(_rainForests.slice(0, 1)) // ["Amazon"]
console.log(_rainForests.slice(0, 1)) // ["Amazon"]
console.log(_rainForests.slice(1)) // [ 'Borneo', 'Cerrado', 'Congo' ]
console.log(_rainForests.slice(1, 2)) // ['Borneo']
console.log(_rainForests.slice(2, 2)) // []
console.log(_rainForests.slice(2, 3)) // ["Cerrado"]
console.log(_rainForests.slice(0, 2)) // ["Amazon", "Borneo"]
console.log(_rainForests) // ["Amazon", "Borneo","Cerrado, "Congo"]
