// With Object.freeze(), new changes have no effect on the frozen object. 
// However, the seal() method allows modifying existing properties. 
// This means that while you cannot add new properties or remove existing ones, you can make changes.

let obj = {
    name: "Hamza",
    age: 25
}

Object.freeze(obj)
obj.name = "Zaheer"
obj.city = "Islamabad"

console.log(obj) // { name: 'Hamza', age: 25 }

/* { 
    name:
      { 
        value: 'Hamza',
        writable: false,
        enumerable: true,
        configurable: false 
      },
    age:
       { 
        value: 25,
        writable: false,
        enumerable: true,
        configurable: false 
     }  
} */

let obj_2 = {
    name: "Ali"
}

Object.seal(obj_2)
obj_2.name = "Hamza"
obj_2.age = 25;

console.log(obj_2) // { name : "Hamza" }

console.log(Object.getOwnPropertyDescriptors(obj_2)) 
/* { name:
  { 
    value: 'Hamza',
    writable: true,
    enumerable: true,
    configurable: false 
  } 
} */


