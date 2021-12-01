class Person {
  // Instead of defining class variables everytime, you can simply use access modifier property before params in constructor
  // class varibles will be initialized with exactly the same name and value
  constructor(public name: string , private age: number = 24){}

  get getInformation(){
    console.log(`Name: ${this.name}`)
    console.log(`Age: ${this.age}`)
    return {
      name: this.name,
      age: this.age
    }
  }
}

const person = new Person("Hamza")

console.log(person.getInformation) // {name: "Hamza", age: 24}
