type IPersonType = {
  name: string
  age: number
  hobbies: string[]
  role: [number, string]
}

const person: IPersonType = {
  name: "Hamza",
  age: 25,
  hobbies: ["Coding!!", "Coding!!!", "Coding!!!!"],
  role: [2, "React Developer"]
}

// person.role = ["3", "Frontend Developer"] // this assignment will now give error after making tuple type

person.role = [3, "Senior React Developer"]

