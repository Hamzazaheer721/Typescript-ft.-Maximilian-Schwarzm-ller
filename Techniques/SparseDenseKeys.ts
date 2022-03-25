
////// ////// ////// //////////////////////////////////////////////////////////////////////////////////////// /////// //////// ////////
////// The keys() method returns a new Array Iterator object that contains the keys for each index in the array. ////// ////// ///////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const array = [1,2,3,4,5,6]
const iterator = array.keys();
const arrayKeys = [...iterator]

console.log(arrayKeys) // [0,1,2,3,4,5]

for (let valueForKeysArray of array.keys()){
    console.log(`keys: ${valueForKeysArray}`)
}

// keys: 0
// keys: 1
// keys: 2
// keys: 3
// keys: 4
// keys: 5

for (let key in array){
    console.log(`keys: ${key}`)
}

// keys: 0
// keys: 1
// keys: 2
// keys: 3
// keys: 4
// keys: 5


////////////////////////////////////////
////// Sparse Keys vs Dense Keys //////
//////////////////////////////////////

let list = ["Appleas", , "Oranges"]
const sparseKeys = Object.keys(list)
const denseKeys = [...list.keys()]
console.log(sparseKeys) // ['0', '2']
console.log(denseKeys) // [0, 1, 2]


