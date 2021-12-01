// in case of array, while destructuring we were getting the values in order but that won't happen in object
// Array is an ordered list while in object, order is not always guranteed

const person = {
  name: "hamza",
  age: 42
}

const _obj = {name: person.name, ...person}

console.log(_obj)  // {name: "hamza", age: 42}

const {age, name: _objName} = _obj;
