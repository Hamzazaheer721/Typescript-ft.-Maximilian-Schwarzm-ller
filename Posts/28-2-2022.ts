// in case of array, while destructuring we were getting the values in order but that won't happen in object
// Array is an ordered list while in object, order is not always guranteed

type AddressType = {
  city: string
  street: string
  colony: string
}

interface IAddress {
  address: AddressType
}

export interface IPerson {
  name: string
  age: number
}

export type PersonWithAddress = IPerson & IAddress

const personWithAddress: PersonWithAddress = {
  name: 'Hamza',
  age: 25,
  address: {
    city: 'Islamabad',
    street: 'NN-23/2',
    colony: 'Behria Town'
  }
}

const person: IPerson = {
  name: 'Hamza',
  age: 25
}

// Shallow Copying the object

/* Method # 1 */
const { ...clone } = person

/* Method # 2 */
const clone_ = Object.assign({}, person)

/* Method # 3 */
const clone__ = { ...person }

console.log(clone) // {name: "Hamza", age: 25}
console.log(clone_) // {name: "Hamza", age: 25}
console.log(clone__) // {name: "Hamza", age: 25}

// _.cloneDeep with lodash

/* Deep cloning Method */

/* Method # 1 */
const deepClone = JSON.parse(JSON.stringify(person))

/* Method # 2 */
const cloneDeep = <T extends object>(obj: T): T => {
  const clone = {} as unknown
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null)
      clone[key] = cloneDeep(obj[key] as unknown as T)
    else clone[key] = obj[key]
  }
  return clone as T
}

const deepClone_ = cloneDeep(personWithAddress)
console.log(deepClone_)
