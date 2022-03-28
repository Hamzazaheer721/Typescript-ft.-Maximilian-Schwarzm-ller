const address = {
    city: "Isb"
}

const person = {
    name: "Hamza",
    age: 25
}

Object.setPrototypeOf(person, address)

console.log(person.city) // Isb
console.log(address.name) // undefined

// Reason ?
console.log(Object.getPrototypeOf(person)) // { city: 'Isb' }
console.log(Object.getPrototypeOf(address)) // {}
