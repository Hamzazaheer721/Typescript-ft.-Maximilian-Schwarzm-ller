enum IGenderAction {
  MALE = '1',
  FEMALE = '0'
}

type IObjType = {
  name: string
  city: string
  uid: number
  gender?: IGenderAction
  status?: boolean
  country?: string
  address: {
    street: string
    colony: string
  }
}

const obj_1: IObjType = {
  name: 'Hamza',
  city: 'Islamabad',
  uid: 235,
  gender: IGenderAction.MALE,
  address: {
    street: 'Allahabad',
    colony: 'People colony'
  }
}

/* Method # 1: Shallow Copy */
const obj_2 = Object.assign({}, obj_1)
obj_2.name = 'Sarmad'
obj_2.address.colony = 'PWD'
obj_2.address.street = 'Street 3'

console.log(obj_1)
console.log(obj_2)

/* Method # 2: Shallow Copy*/
const obj_3 = { ...obj_1 }
obj_2.address.colony = 'Behria phase 7'
obj_2.address.street = 'Street 92'

console.log(obj_1)
console.log(obj_2)
console.log(obj_3)

/* Method # 3: Deep Copy */
const obj_4 = JSON.parse(JSON.stringify(obj_1))
obj_4.address.colony = 'DHA'
obj_4.address.street = 'st.91124'

console.log(obj_1)
console.log(obj_2)
console.log(obj_3)
console.log(obj_4)
