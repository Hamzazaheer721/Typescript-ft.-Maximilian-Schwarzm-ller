const deepCopy = (arr) => {
  let copy = []
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      copy.push(deepCopy(elem))
    } else {
      if (typeof elem === 'object') {
        copy.push(deepCopyObject(elem))
      } else {
        copy.push(elem)
      }
    }
  })
  return copy
}
// Helper function to deal with Objects
const deepCopyObject = (obj) => {
  let tempObj = {}
  for (let [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      tempObj[key] = deepCopy(value)
    } else {
      if (typeof value === 'object') {
        tempObj[key] = deepCopyObject(value)
      } else {
        tempObj[key] = value
      }
    }
  }
  return tempObj
}

const array1 = [1, 2, [6, 7, 8], 'foo', { a: 0 }, ['bar', [9, 10], 11], 12, 13]
const array2 = deepCopy(array1)

console.log(array2)
