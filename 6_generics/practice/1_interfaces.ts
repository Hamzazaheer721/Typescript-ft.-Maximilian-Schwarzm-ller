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

const _arr: Array<string> = ["Hamza", "Zaheer", "Arbaz", "Tahir"]

let _udpatedArr = addFunc(2, "Azam", _arr)

console.log(_udpatedArr) // [ 'Hamza', 'Zaheer', 'Azam', 'Arbaz', 'Tahir' ]

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

const arr_: Array<string> = ["Hamza", "Zaheer", "Arbaz", "Tahir"]

let _res = removeFunc("Hamza", arr_)

console.log(_res) // [ 'Zaheer', 'Arbaz', 'Tahir' ]

let res_ = removeFunc<boolean>(false, [true, false , false])
console.log(res_) // [true, false] //deletes the false that it finds in array

///////////////////////////////////////////////////////////
/////////////// Check if Object is Empty /////////////////
/////////////////////////////////////////////////////////


const isObjectEmpty = <T extends object> (_obj: T): boolean => {
  const _res = true;
  for (let key in _obj){
    if(_obj.hasOwnProperty(key)) return false
  }
  return _res;
}

// console.log(isObjectEmpty(23)) // error! number is not assignable to object
console.log(isObjectEmpty({name: "hamza"}))

console.log(Object.keys({name: "Hamza"})) // ['name'] // returns array of keys in object

///////////////////////////////////////////////////////////
///////////// Get first Element in Object ////////////////
/////////////////////////////////////////////////////////

const getFirstKey = <T extends object>(_obj: T): string=> {
  let key: string;
  for (let _key in _obj) {
    key = _key
    break
  }
  return key
}


console.log(getFirstKey({name: "Azam", age: 32})) // name