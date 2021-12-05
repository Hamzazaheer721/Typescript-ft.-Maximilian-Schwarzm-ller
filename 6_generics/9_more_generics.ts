const makeArray = <X, Y= number>(a: X, b: Y): [X, Y] => {
  return [a, b]
}

// const v = makeArray<string | number>(2 ,false) // this will throw error since we have default type of second parameter
const _v = makeArray<string | number, object>("hamza", {age: 25})

console.log("Type: ", _v)

////////////////////////////////////////
////// Objects Constraints ////////////
//////////////////////////////////////
interface IObjType {
  firstName: string
  lastName: string
}

const obj_ : IObjType = {
  firstName: "Hamza",
  lastName: "Zaheer"
}

const makeFullName =  <T extends IObjType>(_obj:T ) => { //T should have atleast all properties of IObjectType
  return {
    ..._obj,
    fullName: _obj.firstName + "" + _obj.lastName
    
  }
}

// const _obj = makeFullName(obj_)
const __obj = makeFullName({firstName: "hamza", lastName: "zaheer", age: 25}) 
console.log(__obj)