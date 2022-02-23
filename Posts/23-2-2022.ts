const removeArrayElement = <T>(arr: Array<T>, valToDel: T): Array<T> => {
  if (arr.indexOf(valToDel) === -1) return
  arr.splice(arr.indexOf(valToDel), 1)
  return arr
}

const replaceArrayElement = <T>(
  arr: Array<T>,
  valToDel: T,
  valToReplace: T
): Array<T> => {
  if (arr.indexOf(valToDel) === -1) return
  arr.splice(arr.indexOf(valToDel), 1, valToReplace)
  return arr
}

const addArrayElement = <T>(
  arr: Array<T>,
  valToAdd: T,
  index: number
): Array<T> => {
  if (!(0 <= index) || !(index <= arr.length)) return
  arr.splice(index, 0, valToAdd)
  return arr
}

const arr_ = ['Processor', 'RAM', 'HDD', 'SSD']
console.info(addArrayElement(arr_, 'GPU', 2)) // [ 'Processor', 'RAM', 'GPU', 'HDD', 'SSD' ]
console.info(removeArrayElement(arr_, 'GPU')) // [ 'Processor', 'RAM', 'HDD', 'SSD' ]
console.info(replaceArrayElement(arr_, 'Processor', 'CPU')) // [ 'CPU', 'RAM', 'HDD', 'SSD' ]
