////////////////////////////////////////////////
////////////// Ways to copy Object ////////////
//////////////////////////////////////////////

const _obj: { name: string; age: number; class: string } = {
  age: 21,
  name: 'hamza',
  class: '12th grade'
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
    if (typeof _obj === 'object' && _obj !== null) {
      _copy[key] = _deepClone(_obj)
    }
    _copy[key] = obj[key]
  }
  return _copy as T
}

// this method will return Deep Copy of the object of any kind that we will pass in.
console.log(_deepClone({ name: 'Hamza', age: 21, e: { name: 'ad' } }))

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

///////////////////////////////////////////////////////
///////////////// Flattening Array ///////////////////
/////////////////////////////////////////////////////
// Array.flat creates new array with all sub array element concatenated into it recursively upto specified depth
const _sampleArray = [[2], 1, [[2, 3]], [[[1, 3, 3]]], [[[[]]]]]
console.log(_sampleArray.flat()) // [ 2, 1, [ 2, 3 ], [ [ 1, 3, 3 ] ], [ [ [] ] ] ]
console.log(_sampleArray.flat(0)) // doesn't do anything
console.log(_sampleArray.flat(1)) // same as flat()
console.log(_sampleArray.flat(2)) // destructs [[2]] to 2 // [ 2, 1, 2, 3, [ 1, 3, 3 ], [ [] ] ]
console.log(_sampleArray.flat(3)) // [ 2, 1, 2, 3, 1, 3, 3, [] ]
console.log(_sampleArray.flat(4)) // [ 2, 1, 2, 3, 1, 3, 3 ]
console.log(_sampleArray.flat(500)) // same as flat(4)

//////////////////////////////////////////////////////
///////////  Better way to flatten array ////////////
////////////////////////////////////////////////////

console.log([2, 3, 5, 7, 11, 13, 15, 17, 19, 21, 23].splice(2, 3)) // [5, 7, 11]
console.log([2, 3, 5, 7, 11, 13, 15, 17, 19, 21, 23].slice(2, 7)) // [5, 7, 11, 13, 15]

const flattenArray = (arr, depth = 1) => {
  return depth > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flattenArray(val, depth - 1) : val),
        []
      )
    : arr.slice()
}

console.log(flattenArray(_sampleArray))
