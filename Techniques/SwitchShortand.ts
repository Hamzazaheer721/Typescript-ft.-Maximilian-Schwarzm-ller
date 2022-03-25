const person = {
    name: "Hamza",
    age: 26
}

const mode = 4;
const cases = {
    1: person["name"],
    2: person["age"],
    default: "Not Found"
}

const val = cases[mode] || cases['default']
console.log(val) // Not Found
