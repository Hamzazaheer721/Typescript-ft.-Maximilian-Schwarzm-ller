class Person<T, U> {
  constructor(public name: T, private age: U) {}
  add: (x: T, y: U) => T 
}

const person = new Person("Hamza", 42)
console.log(typeof person.name) //string

person.add = (x, y) => {
  return x.toString() + +y
}

console.log(person.add("hamza", 23)) //hamza23
