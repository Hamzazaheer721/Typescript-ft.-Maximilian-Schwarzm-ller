class Department {
  constructor(protected id: number) {}
}

class ITDepartment extends Department {
  protected lastEmployee?: string
  constructor(id: number, protected employees: string[]) {
    super(id)
    this.lastEmployee = employees[employees.length - 1]
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
}

class AIDepartment extends ITDepartment {
  constructor(id: number, employees: string[], private location: string) {
    super(id, employees)
  }

  //Overriding addEmployee
  addEmployee(_emp: string) {
    if (_emp === 'Hamza') return
    this.employees.push(_emp)
    const { employees } = this
    this!.lastEmployee = employees[employees.length - 1]
  }

  set setLocation(_loc: string) {
    if (!_loc) {
      throw new Error('Please enter a Location !!')
    }
    this.location = _loc
  }

  get getLocation() {
    return this.location
  }
}

const aiDept = new AIDepartment(42, ['Saad', 'Zubair'], 'Gujranwala')

aiDept.addEmployee('Hamza') // rejected
console.log(aiDept.getEmployees) // ["Saad", "Zubair"]
console.log(aiDept.getLastEmployee) // Zubair
aiDept.addEmployee('Arbaz')
console.log(aiDept.getLastEmployee) //Arbaz //Note: we access getters just as property not as method

aiDept.setLocation = 'Lahore'
console.log(aiDept.getLocation) // Lahore

// console.log(aiDept.setLocation("Islamabad")) // we can't access it like method, we have to access setters, getters as property
aiDept.setLocation = '' // Please enter a Location !!!
