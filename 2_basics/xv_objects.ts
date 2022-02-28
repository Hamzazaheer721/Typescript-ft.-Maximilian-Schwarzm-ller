/* Object.defineProperty defines a new property on Object, modifies an existng property, or returns the object */

let obj1: any = {}
Object.defineProperty(obj1, 'address', {
  value: '32',
  writable: true
})

console.log(obj1.address) // 32

Object.defineProperty(obj1, 'address', {
  value: '42',
  writable: true
})

console.log(obj1.address) // 42

let a = Object.seal(obj1)

delete obj1.age
delete a.age

obj1.age = 132

console.log(a)
console.log(obj)
