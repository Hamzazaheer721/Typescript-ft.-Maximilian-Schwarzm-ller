const isArray = <T>(obj: T) => obj instanceof Array
const isArray_2 = <T>(obj: T) => Array.isArray(obj)

console.log(isArray([23])) // true
