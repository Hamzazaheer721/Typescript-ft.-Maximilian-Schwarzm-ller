interface IFlattenArray {
  (a: any, b: number): any
}

const flattenArray_: IFlattenArray = (arr, depth) => {
  return depth > 0
    ? arr.reduce(
        (acc, curr) =>
          acc.concat(
            Array.isArray(curr) ? flattenArray_(curr, depth - 1) : curr
          ),
        []
      )
    : arr.slice()
}

const array_ = [[[[[[[[[23, 3]], 3, 2]]]]]], 32, 53, "hamza"]
console.log(flattenArray_(array_, Infinity))

const array = ["hamza", "Ali"]
const { 0: ahmad } = array

console.log(ahmad) // hamza

/* Another way to flatten the array */

const flattenTheArray = (arr): Array<number> => {
  const res: number[] = []
  while (arr.length) {
    let el = arr.shift()
    if (Array.isArray(el)) {
      arr = el.concat(arr)
    } else {
      res.push(el)
    }
  }
  return res
}

console.log(flattenTheArray([[[[[[[[[23, 3]], 3, 2]]]]]], 32, 53, 12])) // [ 23, 3, 3, 2, 32, 53, 12 ]
