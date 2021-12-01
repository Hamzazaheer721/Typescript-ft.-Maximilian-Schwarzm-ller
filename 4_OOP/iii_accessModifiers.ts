class Department {
  public name: string
  private employees: string[] = []
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
}

const department = new Department("BBA")
department.addEmployees("Hamza")
department.printInfo()
department.getEmployeeCount()
