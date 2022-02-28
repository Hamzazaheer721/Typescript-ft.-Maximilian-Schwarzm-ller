// in case of array, while destructuring we were getting the values in order but that won't happen in object
// Array is an ordered list while in object, order is not always guranteed

const person = {
  name: 'hamza',
  age: 42
}

const _obj = { name: person.name, ...person }

console.log(_obj) // {name: "hamza", age: 42}

const { age, name: _objName } = _obj

// Shallow Copying the object

/* Method # 1 */
const { ...clone } = _obj

/* Method # 2 */
const clone_ = Object.assign({}, _obj)

/* Method # 3 */
const clone__ = { ..._obj }

console.log(clone) // {name: "hamza", age: 42}
console.log(clone_) // {name: "hamza", age: 42}
console.log(clone__) // {name: "hamza", age: 42}
