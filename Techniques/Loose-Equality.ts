console.log("" == 0) // true
console.log("" === 0) // false

console.log(false == "false") // false
console.log(false === "false") // false

console.log(false == "") // true
console.log(false === "") // false

console.log(true == 1) // true
console.log(true === 1) // false
console.log(+true === 1) // true
console.log(true === Boolean(1)) // true

console.log(+"ABC") // NaN
console.log(Boolean("ABC")) // true
console.log(String(true)) // true

// When javascript converts "ABC" into number it gets NaN
console.log("ABC" == 1) // false
console.log("ABC" == NaN) // false
console.log("ABC" === 1) // false

console.log(NaN == NaN) // false
console.log(NaN === NaN) // false

// NaN is not equal to anything, not even to itself
console.log(NaN == null) // false
console.log(NaN == undefined) // false
console.log(NaN == NaN) // false

// null 
console.log(null == null) // true
console.log(null == undefined) // true

console.log(null == 0) // false
console.log(null == "") // false
console.log(null == false) // false 
console.log(null == NaN) // false

// undefined
console.log(undefined == undefined) // true
console.log(undefined == null) // true

console.log(undefined === undefined) // true
console.log(undefined === null) // false

console.log(undefined == 0) // false
console.log(undefined == "") // false
console.log(undefined == false) // false 
console.log(undefined == NaN) // false
