const arr = [false, '', 0, {}, [], 32.3]

const arr_ = arr.filter((a) => Boolean(a))
console.log(arr_) // [ {}, [], 32.3 ]

//Shortend
const shortend = arr.filter(Boolean)
console.log(shortend) // [ {}, [], 32.3 ]
