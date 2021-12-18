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

////////////////////////////////////////////////////
/////////// Better Deep Copy Method ///////////////
//////////////////////////////////////////////////

const _deepClone = <T extends object>(obj: T): T => {
  const _copy: unknown = {}
  for (let key in obj) {
    let _obj = obj[key] as unknown
    if (typeof _obj === "object" && _obj !== null) {
      _copy[key] = _deepClone(_obj)
    }
    _copy[key] = obj[key]
  }
  return _copy as T
}

// this method will return Deep Copy of the object of any kind that we will pass in.
console.log(_deepClone({ name: "Hamza", age: 21, e: { name: "ad" } }))

/////////////////////////////////////////
///////////// MERGE THE ARAY //////////
///////////////////////////////////////

const mergeArrays = <T>(...arrays: Array<T>[]): Array<T> => {
  const _arr: T[] = []
  for (let array of arrays) {
    _arr.push(...array)
  }
  return _arr
}

const _array1 = [1, 2, 3, 4]
const _array2 = [5, 6, 7, 8]
const _array3 = [9, 10]
const _array4 = [11, 12, 13]

const _mergedArrays = mergeArrays<number>(_array1, _array2, _array3, _array4)

console.log(_mergedArrays)

/////////////////////////////////////////////////////
////////// ALTERNATE MERGE ARRAY METHOD ////////////
///////////////////////////////////////////////////

const _mergeWithReduce = <T>(...array: Array<T>[]): Array<T> => {
  return array.reduce((prev, curr) => {
    let _arr: Array<T> = prev
    _arr.push(...curr)
    return _arr
  }, []) as Array<T>
}

console.log(_mergeWithReduce<number>(_array1, _array2, _array3, _array4))
