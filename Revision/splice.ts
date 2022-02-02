const arr1 = ['Hamza', 'Zaheer', 'Haseem', 'Tahir Ali']
const arr2 = ['Hamza', 'Zaheer', 'Haseem', 'Tahir Ali']
const arr3 = ['Hamza', 'Zaheer', 'Haseem', 'Tahir Ali']

const removeElement = <T>(array: T[], valueToRemove: T): T[] => {
  if (array.indexOf(valueToRemove) === -1) return []
  array.splice(array.indexOf(valueToRemove), 1)
  return array
}

const replaceElement = <T>(
  array: T[],
  valueToRemove: T,
  valueToReplace: T
): T[] => {
  if (array.indexOf(valueToRemove) === -1) return []
  array.splice(array.indexOf(valueToRemove), 1, valueToReplace)
  return array
}

const addElement = <T>(array: T[], valueToAdd: T, index: number): T[] => {
  if (index > array.length) return []
  array.splice(index, 0, valueToAdd)
  return array
}

console.log(removeElement(arr1, 'Haseem'))
console.log(replaceElement(arr2, 'Haseem', 'Haseeb'))
console.log(addElement(arr3, 'Ahmad', 2))
