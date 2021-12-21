const _func1 = (_val: number, callback: (b: number) => void): void => {
  callback(_val)
}

const _callback = (b: number): number => {
  console.info(b)
  return b
}

_func1(5, _callback)

//////////////////////////////////////
///////////// NOTE //////////////////
////////////////////////////////////

// We have mentioned that callback has return type as number but in params of the _funct1 it is returning void
// we could use the return type of the _callback method in our _func1
// by specifying rtn typeof _callback as void, we are saying that although we could use its rtn type
// but since we don't have any need of it in our function _func1 so we will declare it as void
