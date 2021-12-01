class Department {
  public name: string
  private employees: string[] = [] // can only be accessed from setter getters or any public method 
  private employee_count: number = 0

  constructor(_name: string) {
    this.name = _name
  }

  public addEmployees(..._emp: string[]) {
    this.employees = this.employees.concat(_emp)
    this.employee_count += _emp.length
  }

  describe(this: Department) {
    console.log(`Name of Dept: ${this.name}`)
  }

  private printEmployeesInformation(this: Department) {
    //this method can only by other methods in Dept class
    console.log(`Number of employees: `, this.employees.length)
    console.log(`Employees: `, this.employees)
  }

  printInfo(this: Department) {
    this.printEmployeesInformation()
  }

  getEmployeeCount(this: Department) {
    console.log(`Employee count: ${this.employee_count}`)
  }

  get allAttributes() { // can't set this: Department here
    return {
      name: this.name,
      employees: this.employees,
      employee_count: this.employee_count
    } 
  }

  set addOneEmployee(_emp: string) {
    this.employees.push(_emp)
    this.employee_count++
  }
}

const department = new Department("BBA")
department.addEmployees("Hamza")
department.printInfo()
department.getEmployeeCount()
let _attributes = department.allAttributes

console.log(_attributes)  // { name : "BBA", employees: {"Hamza"}, employee_count: 1}

department.addEmployees("Zubair")
department.printInfo() // Number of employees: 2 , Employees: ["Hamza", "Zubair"]
