import { IPerson } from './../../Posts/29-2.2022'

const compareObjects = <T extends object>(...objects: T[]): Boolean => {
  const sortObject = <T extends object>(myObj: T): T => {
    return Object.entries(myObj)
      .sort()
      .reduce(
        (_sortedObj, [k, v]) => ({
          ..._sortedObj,
          [k]: v
        }),
        {}
      ) as T
  }
  return objects.every(
    (obj) =>
      JSON.stringify(sortObject(obj)) === JSON.stringify(sortObject(objects[0]))
  )
}

const person: IPerson = {
  name: 'Hamza',
  age: 25,
  address: {
    city: 'Islamabad',
    country: 'Pakistan',
    province: 'Punjab'
  }
}

const person_: IPerson = {
  age: 25,
  name: 'Hamza',
  address: {
    city: 'Islamabad',
    country: 'Pakistan',
    province: 'Punjab'
  }
}

// /* SPREAD OPERATOR */
// const { ...clone } = person
// const clone_ = { ...person }

// // /* Object.assign */
// const clone__ = Object.assign({}, person)

// clone.address.city = 'Lahore'
// clone_.address.city = 'Islamabad'
// clone__.address.city = 'Karachi'

// console.info(person.address.city) // Karachi
// console.info(clone.address.city) // Karachi
// console.info(clone_.address.city) // Karachi
// console.info(clone__.address.city) // Karachi

// console.log(compareObjects(person__, person_)) // true
// console.log(compareObjects(person, clone_)) // true
// console.log(compareObjects(person, clone__)) // true
// console.log(compareObjects(clone, clone_, clone__)) // true

const clone = JSON.parse(JSON.stringify(person))

const cloneDeep = <T extends object>(obj: T): T => {
  const clone = {} as unknown
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null)
      clone[key] = cloneDeep(obj[key] as unknown as T)
    else clone[key] = obj[key]
  }
  return clone as T
}

const clone_ = cloneDeep(person)

clone.address.city = 'Lahore'
clone_.address.city = 'Karachi'
person.address.city = 'Peshawar'

console.info(clone.address.city) // Lahore
console.info(clone_.address.city) // Karachi
console.info(person.address.city) // Peshawar

console.log(compareObjects(person_, clone)) // false
console.log(compareObjects(clone, clone_, person)) // false
console.log(compareObjects(clone, clone)) // true
