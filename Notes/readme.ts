// If response of one async method is required into another async method then
// We could use the following:
// Solution priors to callbacks are as follows

////////////////////////////////////////
/////////// PROMISES //////////////////
//////////////////////////////////////

const func_A = (_num: number): Promise<number> => {
  const promise = new Promise((resolve, reject) => {
    if (_num > 4) {
      resolve(_num)
    } else reject(-1)
  })
  return promise as Promise<number>
}

const func_B = (_num: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    if (_num > 4) {
      setTimeout(() => {
        resolve(_num)
      }, 1000)
    } else reject(-1)
  })
}

const func_C = (_num: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    if (_num > 1) {
      setTimeout(() => {
        resolve(_num)
      }, 1000)
    } else reject(-1)
  })
}

const func_D = (_num: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    if (_num > 1) {
      setTimeout(() => {
        resolve(_num)
      }, 1000)
    } else reject(-1)
  })
}

const asyncMethod = (_num: number) => {
  return func_A(_num)
    .then((res_A) => typeof res_A === 'number' && func_B(res_A))
    .then((res_B) => typeof res_B === 'number' && func_C(res_B))
    .then((res_C) => typeof res_C === 'number' && func_D(res_C))
    .catch((err) => console.log(err))
}

asyncMethod(5).then((res_D) => console.log(res_D))

//////////////////////////////////////
////////// ASYNC / AWAIT ////////////
////////////////////////////////////

const _asyncAwaitMethod = async () => {
  const res_A = await func_A(5)
  const res_B = await func_B(res_A)
  const res_C = await func_C(res_B)
  const res_D = await func_D(res_C)
  return res_D
}

let variable = 0
const _res = _asyncAwaitMethod().then((_res) => console.log(_res))

console.log(_res)
