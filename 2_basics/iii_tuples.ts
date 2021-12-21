// tuples are a sort of list that can store limited set of items
// In js, the tuples are created using arrays
// you create tuples using [type, type, type] syntax

const tuple1: [string, number, [number, number]] = ['hamza', 25, [53, 63]]

for (let [key, value] of Object.entries(tuple1)) {
  console.log([key, value])
}
// this shows that array is iterable object
// ['0', 'hamza']
// ['1', 25]
// ['2', [53,63]]

let _val: [number, number] = tuple1[2]
let string_al: string = tuple1[0]

// why make tuples? grouping together values of different types together to make it immutable and memory efficient
// in javascript, we acheive it by destructuring array and pretend for it to exist

// you could do the following as well
// destructuring with name
let [number1, number2] = _val

console.log(number1, number2) // 53, 63

///////////////////////////////////
//////////// METHOD # 2 //////////
/////////////////////////////////

// you could also do the same with Object.freeze()
// Object.freeze method freezes the object and hence its properties can't be changed
// It can neither be written nor be edited

const _var = Object.freeze(['hamza', 25])
const [_name, age] = _var
console.log(_name, age) //hamza, 25

// Lets study about array.split
// The split() method divides the string into an ordered list of substrings, put these substrings into an array and returns the array
// The division is done by searching of a pattern, the pattern is given as the first parameter to the method's call

const str = 'The quick brown fox jumps over a lazy dog'

let words = str.split('')
console.log(words) // array of all the letters of the strings seperated by comma

console.log(str.split(',')) // It didn't find any comma and hence it returned whole string in an array

console.log(str.split('1')) // [ 'The quick brown fox jumps over a lazy dog' ] // we get the result again since we couldn't find 1 in string

console.log(str.split(' ')) // wherever space will come, it will split the split the string into substrings
// [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'a', 'lazy', 'dog' ]

console.log(str.split('k ')) // [ 'The quic', 'brown fox jumps over a lazy dog' ] // whereever 'k ' pattern comes in string, it will split the string into substrings

console.log(str.split('The')) // The is removed and ' xyz' string is splitted // [ '', ' quick brown fox jumps over a lazy dog' ]
