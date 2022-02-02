interface IRequired {
  (): never
}

interface IFunc {
  <T>(a: T | never): T
}

const isRequired: IRequired = () => {
  throw Error('Please enter argument')
}

const func: IFunc = (arg = isRequired()) => {
  return arg
}

console.log(func('String is being shown'))
console.log(func())
