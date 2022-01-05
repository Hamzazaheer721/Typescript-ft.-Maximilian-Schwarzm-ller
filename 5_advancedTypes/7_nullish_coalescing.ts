// logical OR || operator returns the right hand side operand if the left operand is any falsy value, not only undefined or null
// if we use || to provide some default value to another variable then you might encounter problems where you might consider
// some falsy values like "" and 0 and false  as usable then you must use nullish coalescing operator

// Nullish coalescing is a logical operator that returns right hand side operand only when its left hand operand is null or undefined
// otherwise it will return left hand operand

let _res: unknown = null ?? 'hey'
console.log(_res) //hey

_res = false ?? 'hey'
console.log(_res) //false //here false which is a falsy value is being considered since we are using nullish operator

_res = 1 ?? 'hey'
console.log(_res) // 1

_res = '' ?? 'hey'
console.log(_res) // empty string

_res = '' || 'hey'
console.log(_res) //hey // "" is a falsy value so it will make logical OR operator to return the right hand operand

_res = 0 ?? 'hey'
console.log(_res) // 0

_res = 0 || 'hey'
console.log(_res) // hey
