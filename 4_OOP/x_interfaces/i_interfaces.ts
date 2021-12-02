interface IPersonBio {
  readonly name: string
  age: number
  setName(_val: string): void
  setAge: (_val: number) => void
}

interface IPersonCity {
  city: string
}

class Person implements IPersonBio, IPersonCity {
  // private age =  "23" //it will throw error since interface enforces the type of age as number
  age: number = 25
  city: string = "Wazirabad"
  name: string

  constructor(_name: string) {
    this.name = _name
  }

  setName(_name: string) {
    this.name = _name
  }

  setAge(_age: number) {
    this.age = _age
  }
}

let person: IPersonCity // this will work now since we are here saying that this person should implement this interface atleast
// we mean that we want all the properties that are required in IPersonCity
person = new Person("Hamza")
console.log(person)
// person.name = "Zaheer" // it can't be set since it was explicitly told that name is readonly

