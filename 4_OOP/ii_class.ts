class Person {
  name: string
  constructor(_val: string){
    this.name = _val
  }
  describe(this: Person){ //add this to remove unwanted behaviours and throw errors during development
    console.log(`Name of the Person: `, this.name)
  }
}

const person = new Person("Hamza")

let _obj: {name?: string, describe: typeof person.describe} = {
  describe : person.describe
}

// _obj.describe();  // this will throw an error here since we told the js to only let that obj access this method which is of class Person
// and class Person always include name property so we have to add name now in our object

// we will make a new object with name property required this time since Class Person as it required
let __obj: {name: string, describe: typeof person.describe} = {
  name: "",
  describe : person.describe
}
__obj.name = "Zubair"

__obj.describe() //Name of the person: Zubair           ===> works totally fine now
