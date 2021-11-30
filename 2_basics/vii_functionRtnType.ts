// undefined is a return type in javascript
// you can initialize a variable with type undefined but you can't return it as return type of function in typescript

let func = (): void => {
  console.log("I am being executed")
}

func() // I am being executed

// if you print the result of the function that returns nothing then it will return undefined
console.log(func())
// I am being executed
// undefined

// if you are persistent on using undefined as return type for function which returns nothing then you have to put return statement

func = (): undefined => {
  console.log("I am being executed")
  return // putting return will stop typescript from throwing error on undefined type as rtn type of this function
}

func() // I am being executed

console.log(func())
// I am being executed
// undefined
