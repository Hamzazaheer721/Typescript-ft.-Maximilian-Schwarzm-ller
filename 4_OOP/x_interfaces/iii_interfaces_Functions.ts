// We know that interfaces are there to define the structure of the object
// If we think deeply, then functions are technically also an object

type IFuncType = (a: number, b: number) => number

interface IFuncTypeWithInterface {
  (a: number, b: number): number
}

// Both types defined above are same

const add: IFuncTypeWithInterface = (val1: number, val2: number): number => {
  return val1 + val2
}

console.log("Sum: ",add(2,2))
