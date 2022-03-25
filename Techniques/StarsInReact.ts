////////////////// ////////////////
///// Filling Stars in React /////
//////////////// ////////////////

let rate = 4;

///////////////////////////////////////// ////////////////////////////////////// /////////////////////////////////////////////
///// The keys() method returns a new Array Iterator object that contains the keys for each index in the array //////////////
/////////////////////////////////////// ////////////////////////////////////// /////////////////////////////////////////////

console.log(Array(rate)) // [ <4 empty items> ]

console.log(Array(rate).keys()) // Object [Array iterator] {}

console.log(...Array(rate).keys()) // 0 1 2 3 

console.log([...Array(rate)]); // [ undefined, undefined, undefined, undefined ]
  
console.log([...Array(rate).keys()]); // [0, 1, 2, 3]

[...Array(rate).keys()].map(() => {
    console.log("I will run 4 times")
})

// I will run 4 times
// I will run 4 times
// I will run 4 times
// I will run 4 times
