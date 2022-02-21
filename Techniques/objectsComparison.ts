const compareObjects = <T extends object>(...objects: T[]): Boolean => {
  return objects.every(
    (obj) => JSON.stringify(obj) === JSON.stringify(objects[0])
  )
}

const obj = {
  name: 'Hamza',
  age: 25,
  address: {
    city: 'Wazirabad',
    province: 'Punjab'
  }
}

const obj2 = {
  name: 'Ali',
  age: 23,
  address: {
    city: 'Karachi',
    province: 'Sindh'
  }
}

const obj3 = {
  name: 'Hamza',
  age: 25,
  address: {
    city: 'Wazirabad',
    province: 'Punjab'
  }
}

console.log(obj === obj3) // false
console.log(compareObjects(obj, obj2, obj3)) // true
