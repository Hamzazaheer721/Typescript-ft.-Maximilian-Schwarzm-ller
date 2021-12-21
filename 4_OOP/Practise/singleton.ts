interface IPersonMethod {
  description: () => void
}

interface IPersonInfo {
  country?: string
  city: string
  description: () => void
}

abstract class Person implements IPersonMethod, IPersonInfo {
  country?: string
  city: string
  constructor(
    protected readonly name: string,
    protected age: number,
    _country: string,
    _city: string = 'XYZ'
  ) {
    if (_country) {
      this.country = _country
    }
    this.city = _city
  }
  description(this: Person) {
    console.log(this.name)
    console.log(this.age)
  }
  abstract skillSet(): void
}

class Engineer extends Person {
  constructor(
    _name,
    _age,
    _country,
    _city,
    private readonly designation: string
  ) {
    super(_name, _age, _country, _city)
  }
  skillSet(this: Engineer) {
    console.log(`${this.designation} engineer`) // ReactJS Dev Engineer
  }
}

const engineer = new Engineer(
  'Hamza Zaheer',
  25,
  'Pakistan',
  'Wazirabad',
  'ReactJS Dev'
)

engineer.skillSet()
