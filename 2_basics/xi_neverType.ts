// never is another type that functions don't return like undefined, they usually show void even though if function never returns anything
// forexample: a function that never stops running, like while true, it doesn't ever return anything.
// another example is for the errors, which will cause the application to crash, for such functions, the rtn type is also never


// lets build a utility function that returns an error

const utilityFunc = (message: string, code: number): never | void => {
  throw ({message: message, errorCode: code})
}

const generateError = () : never => {
  while(true) {console.log("Error")}
}

const _result =  utilityFunc("An error has occured", 500)
console.log(_result) // this will never ever get to show anything because app will be crashed before that

const result = generateError();
console.log("result : ", result) // This will never ever be shown

