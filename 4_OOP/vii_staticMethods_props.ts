// static methods are the methods which we directly called on the class without new Keyword
// we basically use Class as grouping mechacnism
// static allows us to add methods and properties to the class, and are not accessed on instance of the class i.e., objects
// so You don't need to call "new" keyword
// "this" refers to the instance based on the class so you can't use this keyword with static
// the whole idea behind "static" itself is to be detached from instance of that class
// e.g Math.pow() here we are using methods directly on Math class, not on istance of Math (object) which is created with new Math()
// So Math acts as namespace for grouping mechanism

console.log(Math.pow(2, 3)) // 8

// you can't access properties and methods of class into static method, neither can they use this static method and properties
// I have changed the static property from within the class and from outside the class both in following code

class Department {
  constructor(protected id: number) {}
}

class ITDepartment extends Department {
  static fiscalYear = 2022
  static staticEmployees: string[] = []
  protected lastEmployee: string = ""
  constructor(id: number, protected employees: string[]) {
    super(id)
    this.lastEmployee = employees.pop()
  }

  static addStaticEmployee(name: string) {
    ITDepartment.staticEmployees.push(name)
    return {
      name: ITDepartment.staticEmployees
    }
  }

  get getEmployees() {
    return this.employees
  }

  get getLastEmployee() {
    const { lastEmployee } = this
    if (lastEmployee) {
      return lastEmployee
    }
  }

  addEmployee(_emp: string) {
    this.employees.push(_emp)
  }

  printClassInformation() {
    console.log(`Static Fiscal Year: ${ITDepartment.fiscalYear}`)
    console.log(`Static Employees: ${ITDepartment.staticEmployees}`)
    console.log(`Employees: ${this.employees}`)
    console.log(`Last employee: ${this!.lastEmployee}`)
  }
}

const employee = ITDepartment.addStaticEmployee("Hamza")
const year = ITDepartment.fiscalYear
console.log(employee) // {name: "Hamza"}
console.log(year) // 2022

ITDepartment.addStaticEmployee("Aleen")  // Aleen will be added to the static property of the class permanently from now on
const _emp = ITDepartment.staticEmployees
console.log(_emp)  // ["Hamza", "Aleen"]

ITDepartment.fiscalYear = 2023; // fiscal date has been changed as well forever from now on
const _dept = new ITDepartment(23, ["Raheem", "Ahmad", "Abdullah"])
_dept.printClassInformation()