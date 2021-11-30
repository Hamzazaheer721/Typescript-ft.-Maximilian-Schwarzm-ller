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

