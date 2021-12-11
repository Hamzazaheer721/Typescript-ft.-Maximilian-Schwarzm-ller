/////////////////////////////////////////////////////////////////////
//////// DELETE THE LAST ELEMENT IN THE OBJECT /////////////////////
///////////////////////////////////////////////////////////////////

const rtnObjWithRemovedLastKey = <T extends object>(obj: T): T => {
  let _keysArray = Object.keys(obj)
  let lastIndexedKey = _keysArray[_keysArray.length - 1]
  for (let key in obj) {
    if (key === lastIndexedKey) delete obj[key]
  }
  return obj
}

const _obj = {
  name: "hamza",
  age: 23,
  city: "Islamabad"
}

console.log(rtnObjWithRemovedLastKey(_obj))
