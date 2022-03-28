// Object.isFrozen() is used to determine if object is frozen


const empty_obj = {}
console.log(Object.isFrozen(empty_obj)) // false
let cloned_empty_obj = Object.preventExtensions(empty_obj)
console.log(Object.isFrozen(cloned_empty_obj)) // true

const obj_1 = {
    name: "Hamza",
    age: 25
}

console.log(Object.isFrozen(obj_1)) // false
let cloned_obj_1 = Object.preventExtensions(obj_1)

// Preventing extensions to the object still doesn't
// make it frozen, because the property is still
// configurable (and writable).

console.log(Object.isFrozen(cloned_obj_1)) // false

// ...but then deleting that property makes the object
// vacuously frozen.
delete obj_1.name
delete obj_1.age

console.log(Object.isFrozen(cloned_obj_1)) // true

const nonConfigurable = {
    prop : "Prop"
}
Object.preventExtensions(nonConfigurable)

Object.defineProperty(nonConfigurable, "prop", {
    configurable: false
})
console.log(Object.isFrozen(nonConfigurable)) // false

Object.defineProperty(nonConfigurable, "prop", {
    writable: false
})
console.log(Object.getOwnPropertyDescriptors(nonConfigurable))

console.log(Object.isFrozen(nonConfigurable)) // true

// A non-extensible object with accessor property is not frozen
const accessor = {
    get age () {
        return 23
    }
}
Object.preventExtensions(accessor);

// but making only configurable to false will make it frozen
Object.defineProperty(accessor, 'age', {
    configurable: false,
})
console.log(Object.isFrozen(accessor)) // true
 
// Why ? we don't have writable Property here
console.log(Object.getOwnPropertyDescriptors(accessor))


/* { 
  prop: { 
    value: 'Prop',
    writable: false,
    enumerable: true,
    configurable: false
   }
} */


// But the easiest way for an object to be frozen
// is if Object.freeze has been called on it.
var frozen = { 1: 81 };
Object.isFrozen(frozen); // === false
Object.freeze(frozen);
Object.isFrozen(frozen); // === true

// By definition, non-extensible object is frozen-object
console.log(Object.isExtensible(frozen)) // false

// By definition, frozen-object is also a sealed object
console.log(Object.isSealed(frozen)) // true
