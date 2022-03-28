// Method # 1

const string = "Hello World!"

const oldString = "World"
const newString = "Hamza"

let str = string.replace(oldString, newString)

console.log(str) // Hello Hamza!


// Method # 2
str = string.split(oldString).join(newString)

console.log(str) // Hello Hamza!

//Dry Run 
console.log(string.split(oldString)) // [ 'Hello ', '!' ]
console.log(string.split(oldString).join(newString)) // Hello Hamza!
