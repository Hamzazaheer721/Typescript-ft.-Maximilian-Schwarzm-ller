class Person {
  name: string
  constructor(_name: string) {
    this.name = _name
  }
  describe() {
    console.info(`Name of the person: ${this.name}`)
  }
}

const person = new Person("Hamza")
console.log(person.name) // Hamza
person.describe() // Name of the person: Hamza

const company: { name?: string; describe: typeof person.describe } = {
  describe: person.describe
}

company.describe() //undefined

// why did it yielded undefined? because we are defining company object and we have set the pointer describe in it which points to
// memory address of describe() method described in Person class object and since name doesn't exist in object company so we get
// undefined in place of this.name

/////////////////////////////////////////
/////////////// RULE OF THUMB //////////
//////////////////////////////////////
// "this" keyword typically refers to the thing which is calling the method

// lets workaround and make name attribute in our object
company.name = person.name
company.describe() // Name of the person is Hamza

// this now prints the value of the this.name which actually exists in this object now
