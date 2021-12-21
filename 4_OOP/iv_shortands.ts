class Person {
  // Instead of defining class variables everytime, you can simply use access modifier property before params in constructor
  // class varibles will be initialized with exactly the same name and value
  // I have added readonly property before the name of the string
  // You can never change the value of the name variable once it has been set
  // without shortand I would have defined it like readonly name: string
  constructor(public readonly name: string, private age: number = 24) {}

  get getInformation() {
    console.log(`Name: ${this.name}`)
    console.log(`Age: ${this.age}`)
    return {
      name: this.name,
      age: this.age
    }
  }
}

const person = new Person('Hamza')

console.log(person.getInformation) // {name: "Hamza", age: 24}
