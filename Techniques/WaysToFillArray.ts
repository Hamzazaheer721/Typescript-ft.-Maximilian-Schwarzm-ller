// Method # 1
const arrayOne = new Array(10).fill(2);
console.log(arrayOne) // [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ]

// Method # 2
const arrayTwo = [...new Array(10)].map((_,i) => i)
console.log(arrayTwo) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Method # 3
const arrayThree = Array.from("hello", (x,i) => x + i )
console.log(arrayThree) // [ 'h0', 'e1', 'l2', 'l3', 'o4' ]

const arrayFour = Array.from([1,2,3,4], (x,i) => x + i )
console.log(arrayFour) // [ 1, 3, 5, 7 ]
