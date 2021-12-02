type ArgType = number | string
interface ISum {
  (a: ArgType, b: ArgType): ArgType
}

const sum: ISum = (val1, val2) => {
  if (typeof val1 === "number" && typeof val2 === "number") {
    return +val1 + +val2
  }
  return val1.toString() + val2.toString()
}

console.log(sum(4, 5)) // 9

////////////////////////////
/////////// MORE //////////
//////////////////////////

interface ICar {
  name: string
  tires: number
}
type IPlane = {
  name: string
  wings: number
}
type Combined = ICar | IPlane

const _plane: IPlane = {
  name: "Airbus",
  wings: 2
}

const _car: ICar = {
  name: "Honda",
  tires: 4
}

let _generate = (_vehicle: Combined): number => {
  if ("tires" in _vehicle) {
    return _vehicle.tires
  } else if ("wings" in _vehicle) {
    return _vehicle.wings
  }
}

console.log(_generate(_car)) // 4
console.log(_generate(_plane)) // 2

//////////////////////////////////
//////////// OOP ////////////////
////////////////////////////////

class Person {
  name: string
  constructor(_name: string) {
    this.name = _name
  }
  getInfo(this: Person) {
    console.log(`Name: ${this.name}`)
  }
}

class Animal {
  name: string
  private readonly breed: string
  constructor(_name: string, _breed: string) {
    this.name = _name
    this.breed = _breed
  }

  getBreed(this: Animal) {
    console.log(`Breed: ${this.breed}`)
  }
}

type _Combined = Person | Animal

let generate = (_livingBeing: _Combined) => {
  console.log(_livingBeing.name)
  if ("getBreed" in _livingBeing) {
    //since classes are technically objects
    _livingBeing.getBreed()
  } else if (_livingBeing instanceof Person) { // this works here but not in interfaces because interfaces are not compiled to javascript code but class are compiled
    _livingBeing.getInfo()
  }
}

const animal = new Animal("dog", "German Shephard")
const person = new Person("Hamza Zaheer")

generate(animal)
// dog
// German Shephard
