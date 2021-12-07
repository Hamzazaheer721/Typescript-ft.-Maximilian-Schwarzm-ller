// Generics is one of the tools in the toolbox that is used to make components reusable.
// It allows use to be able to create a component that could be used over variety of types rather than a single one.

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("CORRECT!!")
  })
})

promise.then((data) => {
  console.log("RESOLVE RESULT: ", data) // RESOLVE RESULT: CORRECT!!
})

const names: Array<string> = ["Hamza", "Zaheer"]

//////////////////////////////
/////// EXAMPLES ////////////
////////////////////////////

const func = <T>(_val: T): T => {
  return _val
}

let _res = <string>func("Hello World!")
console.log(_res) // Hello World

// We could also use a shorter code which is called arguement inference in which typescript will infer types based on the arg type we pass
let _res_two = func(2)
console.log(_res_two) // 2

////////////////////////////
////// EXAMPLE # 3 ////////
//////////////////////////

const _func = (_obj1: object, _obj2: object) => {
  return Object.assign(_obj1, _obj2)
}

let _resObj = _func({ name: "hamza" }, { age: 23 })
// Works fine?
// Now the problem lies when we try to mutate the object!
// _resObj.name // name doesn't exist on type object, this is because typescript doesn't know the exact type of the object
// we could workaround with it using type casting with as operator "as {name: string, age: number}" but it is not a good solution
let _resObjCopy = _func({ name: "hamza" }, { age: 23 }) as {
  name: string
  age: number
}
_resObjCopy.name = "Zaheer"
// it is mutable now

// Better solution is to use generics !

const func_ = <T, U>(_obj1: T, _obj2: U) => {
  //Typescript will automatically intefer return type to T & U
  return { ..._obj1, ..._obj2 }
}

let resObj_ = func_({ name: "Zaheer", age: 23 }, { city: "Lahore" })
console.log(resObj_) // works as expected
resObj_.city = "Islamabad" // works

///////////////////
///// NOTE ///////
/////////////////

// We could write it like as follows
let resObjCopy_ = func_<
  { name: string; age: number; country: string },
  { city: string }
>({ name: "Zaheer", age: 23, country: "Pakistan" }, { city: "Wazirabad" })

console.log(resObjCopy_) 
resObjCopy_.city = "Lahore" //works

// The problem here is that is it is redundant code and we really dont need to be doing so, since we are using Generics
// Generics will automatically infer type accordingly
