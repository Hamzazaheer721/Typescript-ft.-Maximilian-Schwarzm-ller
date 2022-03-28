const address = {
    city: "Islamabad"
}

const person = {
    name: "Hamza",
    age: 25
}

// Ways to get prototypes

// Method # 1
person.__proto__ = address;

// Method # 2
Object.setPrototypeOf(person, address)

console.log(person.city) // Islamabad
