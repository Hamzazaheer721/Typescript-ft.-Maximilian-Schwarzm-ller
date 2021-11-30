const func = (_val: number) => {
  return _val
}

const _func2 = (_val1: number, _val2: number) => {
  return _val1 + _val2
}

let newFunc
newFunc = func
newFunc = 5 // no error since the type of newFunc was any

let clone: Function // this will remove the any and won't lets us assign functions only

clone = func
// clone = 5  // this will throw error now
console.log(clone(2)) // 2

clone = _func2 //the problem here is that this function has 2 params and previously assigned one had 1 param so this is not perfect solution

////////////////////////////////////////////
/////////////// BETTER APPROACH ///////////
//////////////////////////////////////////

let _clone: (a: number) => number = func;
// _clone = _func2  // this assignment will give us error this time