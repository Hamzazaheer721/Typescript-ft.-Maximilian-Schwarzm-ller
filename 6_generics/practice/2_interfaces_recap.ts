/////////////////////////////////////////////////////////////////////
//////// DELETE THE LAST ELEMENT IN THE OBJECT /////////////////////
///////////////////////////////////////////////////////////////////

const rtnObjWithRemovedLastKey = <T extends object>(obj: T): T => {
  let _keysArray = Object.keys(obj) as Array<keyof T>
  delete obj[_keysArray[_keysArray.length - 1]]
  return obj
}

const _obj = {
  name: "hamza",
  age: 23,
  city: "Islamabad"
}

console.log(rtnObjWithRemovedLastKey(_obj))
