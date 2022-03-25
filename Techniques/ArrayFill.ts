// The fill() method changes all elements in an array to a static value, 
// from a start index (default 0) to an end index (default array.length). 
// It returns the modified array.
// Fill() is a mutator method. It will change the array itself.
// If start is negative then it is treated as array.length + start
// if end is negative then it is treated as array.length + end

const array = [2,3,5,6,7]

// fill 2 from 0 to array.length
let newArray = array.fill(2)

console.log(array) // [ 2, 2, 2, 2, 2 ]
console.log(newArray) // [ 2, 2, 2, 2, 2 ]


const array_2 = [2,3,6,7,8,9,0,1,2]

// fills array with 4 from 2 until 4 (till 3)
const newArray_2 = array_2.fill(4,2,4)

console.log(array_2) // [ 2, 3, 4, 4, 8, 9, 0, 1, 2 ]
console.log(newArray_2) // [ 2, 3, 4, 4, 8, 9, 0, 1, 2 ]

const array_3 = [1,2,3,4,5,6,7,8,9,10]

// fills array with 3 from 2 to array.length
const new_Array_3 = array_3.fill(3,2)

console.log(array_3) // [ 1, 2, 3, 3, 3, 3, 3, 3, 3, 3 ]
console.log(array_3) // [ 1, 2, 3, 3, 3, 3, 3, 3, 3, 3 ]



