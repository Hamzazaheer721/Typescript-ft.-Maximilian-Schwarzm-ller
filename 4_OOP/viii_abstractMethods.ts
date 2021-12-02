// Abstract methods are the methods which have function definition but they don't have its implementation
// The method without body is called Abstract method and it should always be placed in abstract class
// Important when you want to share a common property across child classes but it varies around inherited classes

abstract class Department {
  static uid: number = 123
  constructor(protected location: string) {}
  abstract describe(): void
}

class ITDepartment extends Department {
  // this child class will have to implement abstract method describe()
  constructor(_loc: string, private principal: string) {
    super(_loc)
  }
  describe(this: ITDepartment) {
    console.log(`Principal name: `, this.principal)
    console.log(`Department location: ${this.location}`)
  }
}

const itDeptInstance = new ITDepartment("Park Road, Islamabad", "Hamza Zaheer")

itDeptInstance.describe()
// Principal name : Hamza Zaheer
// Department location: Park Road, Islamabad
