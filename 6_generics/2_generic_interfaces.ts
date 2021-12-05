// we could use generic type for interfaces as well

interface IFuncProps {
  <Type>(a: Type) : Type
}

const func_ = <T>(val1: T): T  => {
  return val1
}

let _newFunc: IFuncProps = func_

console.log(_newFunc(4)) // 4

// Similarly we can make non-generic function signature.
// so we will have to pass the type to IFuncProps.

interface IFuncPropsii<T> {
  <T>(a: T):T
}

let _func = <T>(a: T): T => {
  return a
}

let _funcCloneForNumber: IFuncPropsii<number> = _func //we have now told the typescript that this function will only receive number 

console.log(_funcCloneForNumber(56)) //56

