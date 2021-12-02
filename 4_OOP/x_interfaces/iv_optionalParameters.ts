interface IPerson {
  greet(_val: string): void
  readonly name?: string
}

class Person implements IPerson {
  name?: string;
  constructor(_name?: string){
    if(_name){
      this.name = _name
    }
  }
  greet(_val: string){
    console.log(`Hello there : `, _val )
  }
}

const person = new Person("Hamza")
console.log(person.name) // Hamza