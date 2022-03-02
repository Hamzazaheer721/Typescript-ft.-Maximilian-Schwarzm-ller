const arr = [2, 3, 6, 6, 6, 2, 3, 5, 7, 0]
const uniqueArray = [...new Set(arr)]

console.log(uniqueArray) // [ 2, 3, 6, 5, 7, 0 ]

let list = arr.filter((x, i, a) => a.indexOf(x) === i)

console.log(list)
