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

///////////////////////////////////////////////////////
///////////  Better way to flatten array /////////////
/////////////////////////////////////////////////////

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

console.log(flattenArray(_sampleArray, Infinity))

///////////////////////////////////////////////////////////
/////// Function to add element at specific index ////////
/////////////////////////////////////////////////////////

interface IAddFuncProps {
  <T>(a: number, b: T, c: T[]): T[]
}

const addFunc: IAddFuncProps = (index, val, array) => {
  if (index > array.length) return array
  array.splice(index, 0, val)
  return array
}

const _arr: Array<string> = ['Hamza', 'Zaheer', 'Arbaz', 'Tahir']

let _udpatedArr = addFunc(2, 'Azam', _arr)

console.log(_udpatedArr) // [ 'Hamza', 'Zaheer', 'Azam', 'Arbaz', 'Tahir' ]

///////////////////////////////////////////////////////////
/////// Function to replace element at specific index ////////
/////////////////////////////////////////////////////////

interface IReplaceFuncProps {
  <T>(a: number, b: T, c: T[]): T[]
}

const replaceFunc: IReplaceFuncProps = (index, val, array) => {
  if (index > array.length) return array
  array.splice(index, 1, val)
  return array
}

const _arrR: Array<string> = ['Hamza', 'Zaheer', 'Arbaz', 'Tahir']

let _udpatedArrR = replaceFunc(2, 'Azam', _arrR)

console.log(_udpatedArrR) // [ 'Hamza', 'Zaheer', 'Azam', 'Tahir' ]

//////////////////////////////////////////////////////////////////////////////
////////// Non generic Function to delete element at specific Index /////////
////////////////////////////////////////////////////////////////////////////

type removeFuncType = <T extends boolean | number | string>(
  val: T,
  array: T[]
) => T[]

const removeFunc: removeFuncType = (val, array) => {
  let _index = array.indexOf(val)
  if (_index === -1) return array
  array.splice(_index, 1)
  return array
}

const arr_: Array<string> = ['Hamza', 'Zaheer', 'Arbaz', 'Tahir']

let _res = removeFunc('Hamza', arr_)

console.log(_res) // [ 'Zaheer', 'Arbaz', 'Tahir' ]

let res_ = removeFunc<boolean>(false, [true, false, false])
console.log(res_) // [true, false] //deletes the false that it finds in array

///////////////////////////////////////////////////////////
/////////////// Check if Object is Empty /////////////////
/////////////////////////////////////////////////////////

const isObjectEmpty = <T extends object>(_obj: T): boolean => {
  const _res = true
  for (let key in _obj) {
    if (_obj.hasOwnProperty(key)) return false
  }
  return _res
}

// console.log(isObjectEmpty(23)) // error! number is not assignable to object
console.log(isObjectEmpty({ name: 'hamza' }))

console.log(Object.keys({ name: 'Hamza' })) // ['name'] // returns array of keys in object

///////////////////////////////////////////////////////////
///////////// Get first Element in Object ////////////////
/////////////////////////////////////////////////////////

const getFirstKey = <T extends object>(_obj: T): string => {
  let key: string
  for (let _key in _obj) {
    key = _key
    break
  }
  return key
}

console.log(getFirstKey({ name: 'Azam', age: 32 })) // name

/////////////////////////////////////////////////////////////////////
//////// DELETE THE LAST ELEMENT IN THE OBJECT /////////////////////
///////////////////////////////////////////////////////////////////

const rtnObjWithRemovedLastKey = <T extends object>(obj: T): T => {
  let _keysArray = Object.keys(obj) as Array<keyof T>
  delete obj[_keysArray[_keysArray.length - 1]]
  return obj
}

const _obj__ = {
  name: 'hamza',
  age: 23,
  city: 'Islamabad'
}

console.log(rtnObjWithRemovedLastKey(_obj__))

////////////////////////////////////////////////////////////////////////////
// write a function which takes string and returns count of each string ///
//////////////////////////////////////////////////////////////////////////
const countFunct = (str) => {
  str = str.trim()
  let obj = {}
  for (let val of str) {
    if (!obj.hasOwnProperty(val)) {
      obj = { [val]: 0, ...obj }
    }
    obj = { [val]: obj[val]++, ...obj }
  }
  return obj
}

console.log(countFunct('hamza'))
console.log(countFunct('Hi! 13931 is my number'))
