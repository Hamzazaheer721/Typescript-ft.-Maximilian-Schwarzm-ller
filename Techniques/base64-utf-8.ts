const person = {
    name: "Hamza",
    age: 25
}

const objectToBase64 = Buffer.from(JSON.stringify(person), "utf8").toString("base64")
console.log("Base64 Person: ", objectToBase64)
// Base64 Person:  eyJuYW1lIjoiSGFtemEiLCJhZ2UiOjI1fQ==

const backToUTF8 = JSON.parse(Buffer.from(objectToBase64, "base64").toString("utf8"))
console.log("Base64 to utf8 ", backToUTF8)
// Base64 to utf8  { name: 'Hamza', age: 25 }
