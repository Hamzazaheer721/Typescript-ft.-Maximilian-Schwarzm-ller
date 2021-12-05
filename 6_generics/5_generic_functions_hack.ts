// Suppose you wanted to perform operations on the basis of the length of the argument which were passed to functions
// Here we don't want to limit the typescript type to be Array<T>, we might want to pass strings on which length property can be used too like in arrays
// We will have to work around with following method

interface Lengthy {
  length: number
}

const _func = <T extends Lengthy> (a: T) : [T | T[], string] => {
  let description = "Nothing in the string rn"
  if(a.length === 1) {
    description = "There is one element in the string rn"
  }
  if(a.length > 1){
    description = "There are more than one element in the string rn"
  }
  return [a, description]
} 

console.log(_func("hey")) // hey