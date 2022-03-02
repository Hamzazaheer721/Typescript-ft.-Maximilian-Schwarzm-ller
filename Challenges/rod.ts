const rodOffcut = (lengths: number[]): number[] => {
  const calculateShortestElements = (arr: number[]): object => {
    const arr_ = arr.sort((a: number, b: number) => a - b)
    let rtn_arr = {}
    for (let i = 0; i < arr_.length; i++) {
      if (arr_[0] === arr_[i]) {
        rtn_arr = { ...rtn_arr, [i]: arr_[i] }
      }
    }
    return rtn_arr as object
  }
  let rtn_array: number[] = []
  while (lengths.length) {
    rtn_array.push(lengths.length)
    const rtn_: object = calculateShortestElements(lengths)
    for (const [_, val] of Object.entries(rtn_)) {
      let val_ = +val
      lengths.splice(lengths.indexOf(val_), 1)
      console.log(lengths)
    }
  }
  return rtn_array as number[]
}

let arr1 = [1, 1, 3, 4]
let arr2 = [5, 4, 4, 2, 2, 8]
let arr3 = [1, 2, 3, 4, 3, 3, 2, 1]
console.log(rodOffcut(arr3))
