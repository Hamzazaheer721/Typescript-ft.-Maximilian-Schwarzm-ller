const hobbies = ["Hiking", "Coding"]
const firstHobby = hobbies[0]
console.log(firstHobby) // Hiking

//Destructering the String itself
let [firstLetter] = firstHobby
console.log(firstLetter) // H

//Destructuring the Array now
const [_first, _second, ...rest] = hobbies
console.log("First Method: ", _first, _second) //Hiking Coding
console.log("Second Method: ", ...hobbies) // Hiking Coding

// ...rest is wrapping the rest of the hobbies values into array, since there are no elements left so it will be [] in this case
//  ... operator in parameters is called Rest Parameter and it will turn the arguments into array
// however, when used usually the spread operator spreads the array back into array values one by one
console.log(rest) // []

////////////////////////////////
//////// EXTRA ////////////////
//////////////////////////////

const rainForests = ["Amazon", "Borneo", "Cerrado", "Congo"]
// it will slice the array from 0 till 2 index but won't include value at 2nd index

console.log(rainForests.splice(0, 2)) // ["Amazon", "Borneo"]
console.log(rainForests) // ["Cerrado, "Congo"]

// in case of slice, we are return shallow copy of the portion of an array to new array object selected from start to end(end not included)
// hence original array is not modified
const _rainForests = ["Amazon", "Borneo", "Cerrado", "Congo"]
console.log(_rainForests.slice(0, 2)) // ["Amazon", "Borneo"]
console.log(_rainForests) // ["Amazon", "Borneo","Cerrado, "Congo"]

//////////////////////////////////////////////////////////////////
////// Difference b/w spread Operator & Rest Parameter //////////
////////////////////////////////////////////////////////////////

// Rest Parameter let us pass an indefinite amount of parameters to a function and access them in an array
// Spread operator lets us spread the values of array or any other iterator accross zero or more args in a function or element in an array or other iterable