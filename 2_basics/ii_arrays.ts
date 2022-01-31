const person = {
  name: 'Hamza',
  age: 25,
  hobbies: ['Sports', 'Cooking']
}

for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase()) //SPORTS, COOKING
}

/* Array Join */

/* Array.join method creates and returns a new string by concatinating all the array elements in the an array*/
/* Seperated by comma or by specified seperator string in it */
/* By Default Array.join returns string with comma in between contactinated array elements */

const array = ['comma', 'ewo,e,e,tert,co,mm,a,mma']

console.log(array.join(' '))
