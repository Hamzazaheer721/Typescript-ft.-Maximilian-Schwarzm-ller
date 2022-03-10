// The logical AND assignment (x &&= y) operator only assigns if x is truthy.
// The logical OR assignment (x ||= y) operator only assigns if x is falsy.
// The logical nullish assignemtn (x ??= y) operator only assigns if x is nullish (null or undefined)

interface IPerson {
  name: string
  age: number
  isMale?: boolean
}
const person: IPerson = {
  name: 'Hamza',
  age: 0
}

person.age ||= 23
person.name &&= 'Ali'
console.log(person.isMale)
person.isMale ??= true

console.info(person) // { name: 'Ali', age: 23, isMale: true }
