// Sometimes you might want to find the value @ specified key in object

const extractAndConvert = <T extends object, U extends keyof T>(
  _obj: T,
  key: U
) => {
  return _obj[key]
}

const _obj: {name?: string} = {}
console.log(extractAndConvert(_obj, "name")) // undefined // we get undefined no error 
