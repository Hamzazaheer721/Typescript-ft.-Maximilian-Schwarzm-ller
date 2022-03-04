///////////////
//// Types ///
/////////////

type AddressType = {
  city: string
  country: string
  province: string
}

export interface IPerson {
  name: string
  age: number
  address: AddressType
}

////////////////////
////// Main ///////
//////////////////
const person: IPerson = {
  name: 'Hamza',
  age: 25,
  address: {
    city: 'Islamabad',
    country: 'Pakistan',
    province: 'Punjab'
  }
}

// Shallow Copying the object

/* Method # 1 */
const { ...clone } = person

/* Method # 2 */
const clone_ = Object.assign({}, person)

/* Method # 3 */
const clone__ = { ...person }

clone['name'] = 'Zaheer'

console.log(
  JSON.stringify(clone, Object.keys(clone).sort()) ===
    JSON.stringify(person, Object.keys(clone).sort())
)

/* Method 4 */
const _clone_ = {} as IPerson

for (let key in person) {
  _clone_[key] = person[key]
}

_clone_.address.city = 'Lahore'

console.log('')
console.log(person)
