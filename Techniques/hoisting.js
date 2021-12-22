// keyword let and const have block scope
// variables having block scope can't be accessed from outside

{
  const x = 2
}
// console.log(x) // x is not defined

// varibles defined with var keyword don't have block scope and can be accessed outside of block
{
  var _x = 2
}
console.log(_x) // 2 => it can be accessed here

//////////////////////////////////////
///////////// Local Scope ///////////
////////////////////////////////////

// variables defined inside of function, become local to that function and can't be accessed outside
function _localScope() {
  var __x = 2 // this variable has function scope now
}
// console.log(__x) // __x is not defined

//////////////////////////////////
////////// Global Scope /////////
////////////////////////////////

// variables declared outside of function has global scope
// console.log(carName) // cant access variable before initialization

let carName = 'Audi'

const _func = () => {
  console.log(carName) // Audi
}

//////////////////////////////////////////
///// variable vs Reference Error ///////
////////////////////////////////////////
console.log(typeof variable) // undefined

// console.log(variable) // Reference error: variable is not defined

console.log(typeof _variable) // number
_variable = 2
console.log(_variable) // 2
/////////////////////////////////////
//////////// NOTE //////////////////
///////////////////////////////////

// we get error when we use variable initialized with let and const but with var, we get undefined due to hoisting
// in hoisting, variables are t
// console.log(a) // undefined ===> block scope variable is defined before its declaration
const a = 'hey'

// Variables defined outside of functions become global variables
// If we have initialize a variable without declaring it then it automatically becomes global variable

__func()
console.log(b) // 2
function __func() {
  b = 2
}
