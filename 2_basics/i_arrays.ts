let obj = {
  a: "A",
  b: "B",
  c: "C"
}

for (let array of Object.entries(obj)) {
  console.log(array) //gives arrays of [key, value]
}

for (let key in obj){
  console.log(key) //keys
}

for (let key in obj){
  console.log(obj[key])  //values
}

// suppose 
let _obj = [1,2,3] as number[]

for (let k in _obj){
  console.log(k) // 0 , 1, 2
}

for (let k of _obj){
  console.log(k) //1, 2, 3
}

// for...in loop will give us index in case of arrays and in case of objects, it will give us keys
// for...of gives value of iterable object like string and arrays
// for...of will loop over all type of data that is iterable 

// arrays are objects and objects are reference values and when we push into arrays, we are changing the memory values not memory addresses

const hobbies = ["Coding", "Gaming"]
const activeHobbies = ["Hiking"]

activeHobbies.push(...hobbies)
console.log(activeHobbies)
// ["Hiking", "Coding", "Gaming"]

const hobbiesObj = {
  coding: "CODING",
  gaming: "GAMING"
}

const activeHobbiesObj = {
  hiking: "HIKING"
}

const _combine = Object.assign(hobbiesObj,activeHobbiesObj)

console.log(_combine)

// {coding: "CODING", gaming: "GAMING", hiking: "HIKING" }

const copyingPointer = _combine; 

const newObjWithCopiedValues = {..._combine}



////////////////////////////////////
////////// Rest Parameter /////////
//////////////////////////////////

const genericSum = (...numbers: number[]) => {
  return numbers.reduce((_res, _val)=> _res + _val ,0)
}

const specificTuppleSum = (...numbers: [number, number, number]) => {
  return numbers.reduce((_res, _val) => _res + _val, 0)
}

let addedNumbers = genericSum(4,55,12,4.5,5)
console.log(addedNumbers) //80.5

addedNumbers = specificTuppleSum(4,2,1)
console.log(addedNumbers) // 7


// lets assume another example

const _genericSumWithSpread = (val1: number, val2: number, val3: number) => {
  return val1 + val2 + val3
}

let arr: [number, number, number] = [2,3,4]
addedNumbers = _genericSumWithSpread(...arr)
