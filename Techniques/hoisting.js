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

///////////////////////////////////////////
/////// Global Variables in HTML /////////
/////////////////////////////////////////

// In Js, the global scope is the javascript environment
// In HTML, the global scope is window Object.
// Global variables defined with var keyword belong to window object

var _htmlVar = 'Hello World!'
// this can be used with window._htmlVar
// Global variables defined with let keyword don't belong to window object

// Note => Function Arguements work as local variables.

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

///////////////////////////////////////////
////////// Hoisting //////////////////////
/////////////////////////////////////////

// previously, I've used the example of variable declared with var

console.log(hoistVar) // undefined

var hoistVar = 'Hey I am being hoisted'

// why this happened ?
// Hoisting !, all variables and function declarations are hoisted on top of their scope.
// javascript, hoisted the variable hoistVar like as follows
var hoist_var
console.log(hoist_var)
hoist_var = 'Hey I am being hoisted'

// On other hand, undeclared variables don't exist until the code assigning them is executed,
// Therefore, assigning value to undeclared variable implicitly creates it as a global value;
function hoist() {
  a = 20
  var _b = 20
}

console.log(a) // hey

// console.log(_b) // not accessible
