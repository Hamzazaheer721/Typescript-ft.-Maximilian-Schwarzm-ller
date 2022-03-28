/* Object.defineProperty defines a new property on Object, modifies an existng property, or returns the object */

let obj1: any = {}
Object.defineProperty(obj1, 'address', {
  value: '32',
  writable: true
})

console.log(obj1.address) // 32

Object.defineProperty(obj1, 'address', {
  value: '42',
  writable: true
})

console.log(obj1.address) // 42

let a = Object.seal(obj1)

delete obj1.age
delete a.age

obj1.age = 132

console.log(a)
console.log(obj)


/////////////////////////// /
//// Object.is() /////// ///
/////// ///////////// /////

// Object.is() determines whether the two values are same values.
// rtn value: boolean
// Different from === in treatment of signed zeros and NaNs. The === and == treat +0 and -0 as equal. The Operator treats Number.NaN and NaN as not equal.
// Different from == applies coercion (type casting) to both sides ( == converts the data type to see if its value is equal to other operand whereas ===
// doesn't need to do any type casting thus less work is done) to see if they aren't same type. resulting ( "" == false being true) but Object.is doesn't 
// coerce either values.

const obj_1 = {}
const obj_2 = {}
const obj_1_clone = obj_1

const var_one = 2
const var_two = 2;

console.log(Object.is(obj_1, obj_2)) // false
console.log(Object.is({}, {})) // false
console.log(Object.is(obj_1, obj_1_clone)) // true

console.log(Object.is(var_one, var_two)) // true

console.log(Object.is(0, -0)) // false
console.log(Object.is(-0, -0)) // true
console.log(Object.is(+0, 0)) // true
console.log(Object.is(-0n, 0n)) // true

console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(NaN, Number.NaN)) // true
console.log(Object.is(NaN, 0/0)) // true
