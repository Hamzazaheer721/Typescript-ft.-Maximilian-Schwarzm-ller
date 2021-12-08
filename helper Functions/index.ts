////////////////////////////////////////////////
////////////// Ways to copy Object ////////////
//////////////////////////////////////////////

const _obj: { name: string; age: number; class: string } = {
  age: 21,
  name: "hamza",
  class: "12th grade"
}

// We can do the following using
// Spread
// Object.assign
// JSON

// Method 1
let p1 = {
  ..._obj
}

// Method 2
p1 = Object.assign({}, _obj)

// Method 3
p1 = JSON.parse(JSON.stringify(_obj))

/////////////////////// Shallow Copy Method /////////////////////

const shallowCopy = <T extends object>(obj: T): T => {
  return { ...obj }
}

/////////////////// Deeep Copy Method //////////////////////////

const deepCopy = <T extends object>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj))
}

///////////////// Better Deep Copy Method /////////////////////
const _deepClone = <T extends object>(obj: T): T => {
  const _copy: unknown = {}
  for (let key in obj) {
    let _obj = obj[key] as unknown;
    if ((typeof _obj === "object" && _obj !== null) {
      _copy[key] = _deepClone(_obj)
    }
    _copy[key] = obj[key];
  }
  return _copy as T
}
// this method will return Deep Copy of the object of any kind that we will pass in.
console.log(_deepClone({ name: "Hamza", age: 21, e: { name: "ad" } }))
