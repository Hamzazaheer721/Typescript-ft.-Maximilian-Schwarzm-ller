class Department {
  constructor(public employees: string[]) {}

  get getDepartmentName() {
    return this.employees
  }

  set addDepartments(_emp: string) {
    this.employees.push(_emp)
  }
}

const department = new Department(["Ali Ahmad"])

class ITDepartment extends Department {}

const itDept = new ITDepartment(["Hamza"]) // it now is pointing to the constructore of department class

////////////////////////////////
/////////// MORE //////////////
//////////////////////////////

class AccountingDepartment extends Department {
  // this class has access to all the methods and variables of its parent class now except the private methods and private properties of parents
  // to make private properties accessible in child classes, you will have to make them protected 
  constructor(_emp: string[], private reports: string[]) {
    super(_emp)
  }

  printReports(this: AccountingDepartment) {
    console.log(`Employees: `, this.employees)
    console.log(`Reports: `, this.reports)
  }
}

const accDept = new AccountingDepartment(
  ["Zubair"],
  ["Exam Reports", "Salary Reports"]
)

console.log(`Employees: `, accDept.employees)
accDept.printReports()
