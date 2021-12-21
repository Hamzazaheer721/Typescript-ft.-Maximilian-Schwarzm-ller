const combine = (
  _val1: number | string,
  _val2: number | string
): number | string => {
  let result: number | string
  if (typeof _val1 === 'number' && typeof _val2 === 'number') {
    result = _val1 + _val2
  } else {
    result = _val1.toString() + String(_val2)
  }
  return result
}

const combinedAges = combine('Max', 26)

console.log(combinedAges) //Max26
