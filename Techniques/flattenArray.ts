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

const array_ = [[[[[[[[[23, 3]], 3, 2]]]]]], 32, 53, 12]
console.log(flattenArray_(array_, Infinity))

const array = ['hamza', 'Ali']
const { 0: ahmad } = array

console.log(ahmad) // hamza
