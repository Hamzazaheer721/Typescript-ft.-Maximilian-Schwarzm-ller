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

let carName = "Audi"

const _func = () => {
  console.log(carName) // Audi
}

///////////////////////////////////////////
/////// Global Variables in HTML /////////
/////////////////////////////////////////

// In Js, the global scope is the javascript environment
// In HTML, the global scope is window Object.
// Global variables defined with var keyword belong to window object

var _htmlVar = "Hello World!"
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
// in hoisting, variables are to the top of the scope before code execution
// console.log(a) // undefined ===> block scope variable is defined before its declaration
const a = "hey"

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

var hoistVar = "Hey I am being hoisted"

// why this happened ?
// Hoisting !, all variables and function declarations are hoisted on top of their scope.
// javascript, hoisted the variable hoistVar like as follows
var hoist_var
console.log(hoist_var)
hoist_var = "Hey I am being hoisted"

// On other hand, undeclared variables don't exist until the code assigning them is executed,
// Therefore, assigning value to undeclared variable implicitly creates it as a global value;

function hoist() {
  a = 20
  var _b = 20
}

console.log(a) // hey

// console.log(_b) // not accessible

////////////////////////////////////////////
///////////////// ES5 /////////////////////
//////////////////////////////////////////

// the scope of the variable declared with var is in current execution context
// This is either the enclosing function or for the variable that is declared outside of the function, global

// GLOBAL VARIABLES
console.log(_globalVar) // undefined

var _globalVar = "Hey this is global variable"

// javascript has hoisted our variable and this is how the code looks like to interpreter

// var _globalVar
// console.log(_globalVar) // undefined
// _globalVar = 'Hey this is global variable'

// FUNCTION SCOPED VARIABLES
// as we have seen before, variables with global scope are hoisted on the top of the scope.
// Now lets look function scoped variables are hoisted

function _functionScopeExample() {
  console.log(_var) // undefined
  var _var = "Hey I am being used as functional scoped variable"
}

_functionScopeExample()

// This is how interpreter views the above code
// function _functionScopeExample() {
//   var _var
//   console.log(_var)
//   var _var = 'Hey I am being used as functional scoped variable'
// }

/////////////////////////////////////////
///////// Hoisting & let, const ////////
///////////////////////////////////////

// variables declared with block scoped and not function scoped
// console.log(__bGlobe) // 2

function _func_A() {
  // console.log(__bGlobe) // 2
  function _func_B() {
    console.log("bVar : ", bVar) // bVar: undefined
    var bVar = 2
  }
  __bGlobe = 2 // this will be global variable
  _func_B()
}

_func_A()
console.log(__bGlobe) // 2

//////////////////////////////////////////////////////
////////////// var <-> let & const //////////////////
////////////////////////////////////////////////////

// variables defined with var will be initialized to undefined at the beginning of execution
// variables declared with let and const are uninitalized
// const has to be declared and initialized at the same time

let _letVar
console.log(_letVar) //undefined
_letVar = "I will be undefined above"

// console.log(_letVar_2)
// let _letVar_2 = "I will throw reference error in this case"

// const _constVar; // can't access _constVar before intialization
// console.log(_constVar) // this has to be intialized
// _constVar = "I will throw error above because I need to be initialized"

/////////////////////////////////////////////////////////////
//////////////// Hoisting Functions ////////////////////////
///////////////////////////////////////////////////////////

// Js functions can be loosely classified as follows
// function declaration
// function expressions

/////////////////////////////////////////////////////
//////////// Functions Declaration /////////////////
///////////////////////////////////////////////////

// These are of following forms and completly hoisted to completely top.
// Js allow us to invoke us function before declaring it

console.log(hoistedFunc_()) // Output
console.log(typeof hoistedFunc_) // function

function hoistedFunc_() {
  console.log("I will hoisted as I am implementation of function declaration") // I will hoisted as I am implementation of function declaration
}

////////////////////////////////////////////////
////////// Functions expression ///////////////
//////////////////////////////////////////////

console.log(typeof functionExp_) // undefined => just like variables declared with var
// console.log(functionExp_()) // functionExp_ is not a function
var functionExp_ = function () {
  console.log("const functionExp will be hoisted above")
}

///////////////////////////////////////////////////
/////////////// PRECENDENCE LEVEL ////////////////
/////////////////////////////////////////////////

// variable assignment > function declaration > variable declaration

/////////////////////////////////
////////// EXAMPLE # 1 /////////
///////////////////////////////

var prec_exp_var = 23
function prec_exp_var() {
  console.log("I am function declaration")
}

console.log(prec_exp_var) // 23

/////////////////////////////////
/////////// EXAMPLE # 2 ////////
///////////////////////////////

var prec_exp_2_var
var prec_exp_2_var = function () {
  console.log("I am function declaration")
}

console.log(typeof prec_exp_2_var) // function

//////////////////////////////////////////////////
/////////// Class Hoisting //////////////////////
/////////////////////////////////////////////////

// JS Classes either can be loosely classfied as following
// => Class Declaration
// => Class Expressions

///////////////////////////////////
///////// Class Declaration //////
/////////////////////////////////

// Yes, Class declarations are hoisted but they remain unintialized until evaluation.
// This means, that you have to delcare the class before you initialize it.

////////////////////////////////
///// Class Declaration ///////
//////////////////////////////

// var _attique = new Person("Attique", 25.5) // can't access Person before initialization

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

var hamza = new Person("hamza", 25)
console.log(hamza.name);

///////////////////////////////
//////// Class Expressions ///
/////////////////////////////

// Much like function expressions, class expressions are not hoisted

// var square = new Polygon() // Polygon is not constructor
// square.height = 25
// square.width = 25

// console.log(square)

var Polygon = class {
  constructor(height, width) {
    this.height = height
    this.width = width
  }
}

var square = new Polygon()
square.height = 25
square.width = 25
console.log(square) // Polygon {height: 25, width: 25}
