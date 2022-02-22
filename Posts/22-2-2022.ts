type dual = number | string

interface ISum {
  (a: dual, b: dual): dual
}

const sum: ISum = (a, b) => {
  let rtn: dual
  if (typeof a === 'string' || typeof b === 'string') {
    rtn = String(a) + String(b)
  } else {
    rtn = +a + +b
  }
  return rtn
}

console.log(sum(2, 2))
