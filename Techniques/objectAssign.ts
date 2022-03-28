// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. 
// It returns the modified target object.
// Object.assign(target, source)

const obj_1 = {
    a : 2,
    b: 5,
    c: 6
}

const obj_2 = {
    a: 5,
    name: "Random",
    b: "hey",
    c: 8
}

const obj_3 = {
    age: 26,
    name: "RANDOM",
    proto: {
        custom: "custom_proto"
    }
}


const clone = Object.assign({}, obj_1,obj_2,obj_3)

// { 
//     a: 5,
//     b: 'hey',
//     c: 8,
//     name: 'RANDOM',
//     age: 26,
//     proto: { custom: 'custom_proto' }
// }

console.log(clone)

const clone_ =  Object.assign(obj_1, obj_2, obj_3)

console.log(clone_) 

// { 
//     a: 5,
//     b: 'hey',
//     c: 8,
//     name: 'RANDOM',
//     age: 26,
//     proto: { custom: 'custom_proto' }
// }
console.log(obj_1)

// { 
//     a: 5,
//     b: 'hey',
//     c: 8,
//     name: 'RANDOM',
//     age: 26,
//     proto: { custom: 'custom_proto' }
// }
