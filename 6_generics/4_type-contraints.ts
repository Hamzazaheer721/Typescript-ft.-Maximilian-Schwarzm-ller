// suppose we want to constraint our generic types to objects/ strings/ numbers ?
// we could work around liek this 

const func_ = <T extends string | number,U extends string | number> (a: T, b: U) {
  if(typeof a === "string" || typeof b === "string"){
    return String(a) + String(b)
  }
  if(typeof a === "number" && typeof b === "number"){
    return +a + +b
  }
}

console.log(func_("hey", 2)) //hey2

// console.log(func_({age: 32}, 32)) // ERROR!! Object can't be extended

///////////////////////////////
///////// EXAMPLE # 2 ////////
/////////////////////////////

// Now Suppose you want props to Object only
interface IPerson {
  name: string
  age: number
}

const _func = <T extends IPerson, U extends object>(a: T, b : U) => {
  return Object.assign(a, b)
}

// T has to be of type IPerson and U has to be any object

console.log(_func({age: 23, name: "Hamza"}, {city: "Islamabad"})) // { age: 23, name: 'Hamza', city: 'Islamabad' }