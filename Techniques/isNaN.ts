console.log(`NaN===NaN: ${NaN === NaN}`)
console.log(`NaN!==NaN: ${NaN !== NaN}`)

const isNan = <T>(val: T): boolean => {
  let n = +val
  console.log('value after typecasting :', n)
  console.log(`n===n: ${n} === ${n} =>  ${n === n}`)
  console.log(`n!==n: ${n} !== ${n} => ${n !== n}`)
  return n !== n
}

console.log(isNan('92'))
