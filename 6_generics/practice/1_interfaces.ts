///////////////////////////////////////////////////////////
/////// Function to add element at specific index ////////
/////////////////////////////////////////////////////////

interface IAddFuncProps {
  <T>(a: number, b: T, c: T[]): T[]
}

const addFunc: IAddFuncProps = (index, val, array) => {
  if(index > array.length) return array
  array.splice(index,0,val);
  return array
}

const _arr: Array<string> = ["Hamza", "Zaheer", "Arbaz", "Tahir"]

let _udpatedArr = addFunc(2, "Azam", _arr)

console.log(_udpatedArr)


//////////////////////////////////////////////////////////////////////////////
////////// Non generic Function to delete element at specific Index /////////
////////////////////////////////////////////////////////////////////////////

type removeFuncType = <T>(val: T, array: T[]) => T[]


const removeFunc: removeFuncType = (val, array) => {
  let _index = array.indexOf(val)
  if(_index === -1) return 
  array.splice(_index, 1)
  return array;
}

const arr_ : Array<string> = ["Hamza", "Zaheer", "Arbaz", "Tahir"]

let _res = removeFunc("Hamza",arr_)

console.log(_res)