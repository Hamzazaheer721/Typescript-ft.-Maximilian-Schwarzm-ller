// Singleton class is the class that can only have one object
// After first time of creating instance, if we try to instantate the Singleton class, then next variable will always point to the first instance created
// This is usually implemented by singleton pattern
// We won't be able to instantiate this class from outside since our constructor will be private in this case
// How do we make object of a class which can't be instantiated?
// Solution: make private static property of class type and then make static method to instantiate it for only once
// This lets you instantiate the class from within the class

abstract class Department {
  static uid: number = 123
  constructor(protected location: string) {}
  abstract describe(): void
}

class ITDepartment extends Department {
  private static instance: Department // we have kept it private to stop it from being changed from outside
  private constructor(_loc: string, private principal: string) {
    // we kept it private as well, this class now can't be instantiated
    super(_loc)
  }
  static createInstance(_loc: string, _prin: string) {
    if (this.instance) return this.instance
    // Note, we are calling constructor from within the class with help of static method like as follows
    ITDepartment.instance = new ITDepartment(_loc, _prin)
    return this.instance
  }
  describe(this: ITDepartment) {
    console.log(`Principal name: `, this.principal)
    console.log(`Department location: ${this.location}`)
  }
}

const itDeptObj = ITDepartment.createInstance(
  "Park Road, Islamabad",
  "Hamza Zaheer"
)

// now this itDeptObj can access all the properties and methods of ITDepartment class and its parent class
itDeptObj.describe()

const itDeptObj_2 = ITDepartment.createInstance(
  "Ahamadabad, India",
  "Suresh Patil"
)

if (itDeptObj === itDeptObj_2) {
  console.log("I will always be executed since both variables are equal")
} else {
  console.log("I won't be executed")
}
