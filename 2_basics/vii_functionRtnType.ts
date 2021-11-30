// undefined is a return type in javascript
// you can initialize a variable with type undefined but you can't return it as return type of function in typescript

const func = (): void => {
  console.log("I am being executed")
}

func() // I am being executed 

// if you print the result of the function that returns nothing then it will return undefined 
console.log(func()) 
// I am being executed
// undefined
