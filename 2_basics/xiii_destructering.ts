// in case of array, while destructuring we were getting the values in order but that won't happen in object
// Array is an ordered list while in object, order is not always guranteed

type AddressType = {
  city: string
  street: string
  colony: string
}

interface IPerson {
  name: string
  age: number
}
interface IAddress {
  address: AddressType
}

type IPersonWithAddress = IPerson & IAddress
const _obj: IPersonWithAddress = {
  name: 'Hamza',
  age: 25,
  address: {
    city: 'Islamabad',
    street: 'NN-23/2',
    colony: 'Behria Town'
  }
}

const obj: IPerson = {
  name: 'Hamza',
  age: 25
}

//Destructuring
/* Method # 1 */
const __obj = { name: _obj.name, ..._obj }
/* Method # 2 */
const { age, name: objName } = obj

// Shallow Copying the object

/* Method # 1 */
const { ...clone } = obj

/* Method # 2 */
const clone_ = Object.assign({}, obj)

/* Method # 3 */
const clone__ = { ...obj }

console.log(clone) // {name: "Hamza", age: 25}
console.log(clone_) // {name: "Hamza", age: 25}
console.log(clone__) // {name: "Hamza", age: 25}

// _.cloneDeep with lodash

/* Deep cloning Method */

let t1, t2, t3, t4
/* Method # 1 */
t1 = performance.now()
const deepClone = JSON.parse(JSON.stringify(obj))
t2 = performance.now()
t3 = (t2 - t1) / 1000

/* Method # 2 */
const cloneDeep = <T extends object>(obj: T): T => {
  const clone = {} as unknown
  console.log(obj)
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null)
      clone[key] = cloneDeep(obj[key] as unknown as T)
    else clone[key] = obj[key]
  }
  return clone as T
}
t1 = performance.now()

const deepClone_ = cloneDeep(new Date())
t2 = performance.now()
t4 = (t2 - t1) / 1000

console.log(deepClone_)

console.log(
  t4 > t3
    ? `JSON Serialization is faster ${(t3 / t4).toFixed(2)} times`
    : `Custom Deep Clone method is faster ${(t4 / t3).toFixed(2)} times`
)
