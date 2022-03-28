// String.trim() removes white spaces from the start and end of the string
// So we use String.replace() to acheive this task

const string = "Hello World!"

let str = string.replace(/\s+/g, "")

console.log(str) // HelloWorld!
