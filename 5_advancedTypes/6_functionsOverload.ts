// A feature that allows to define several function signatures
// We have several ways of calling the function with different parameters

type Combinable = string | number

interface AddFuncType {
  (a: Combinable, b: Combinable): Combinable
}

let add: AddFuncType = (val1, val2) => {
  if(typeof val1 === "string" || typeof val2 === "string"){
    return val1.toString() + val2.toString()
  }
  return +val1 + +val2
} 

// in this case, we know that typescript will return us result of type Combinable
// but typescript doesn't exactly specify if the result is string or number
// so we usually do typecasting with as operator

const _res = add(1,2) as number
console.log(_res) // 3

const _res2 = add("Hamza", 1) as string
// the problem without typecasting is that we won't be able to use split and other string operations on it since typescript is perceiving it as result of type Combinable
console.log(_res2.toLowerCase()) //hamza1 // now you can use it after type casting 

// What could be potential Solution for it ?  function overloading !! 
// lets redefine our function like as follows
function _add (val1: number, val2: number): number;
function _add (val1: string, val2: string): string;
function _add (val1: string, val2: number): string;
function _add (val1: number, val2: string): string;
function _add (val1: Combinable, val2: Combinable){
  if(typeof val1 === "string" || typeof val2 === "string"){
    return val1.toString() + val2.toString()
  }
  return +val1 + +val2;
}

// now you wont have to be worried ta typecast the result
const _result = _add(3, "hamza")
console.log(typeof _result) //string

