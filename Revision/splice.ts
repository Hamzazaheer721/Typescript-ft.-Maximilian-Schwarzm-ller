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




// const a = 'DDUUDDUDUUUD'.trim(); 

// return value of match is array of string if atleast one match exists
// if the match doesn't exist then it will return null
const matches = a.match(/DDU/g); 
const count = matches ? matches.length : 0; 

let position = a.indexOf('DDU'); // 0
// return value of indexOf is number 
// in falsy case, it will return -1
let count_two = 0;

while (position !== -1) {
    count_two++;
    position = a.indexOf('DDU', position + 1);
}

// Revision: 24/8/2024
const months = ['Jan', 'March', 'April', 'June'];

// Delete
const elem = "March";
months.splice(months.indexOf(elem), 1)

// Add
months.splice(1, 0, elem)

// Replace
months.splice(0, 1, 'January')
