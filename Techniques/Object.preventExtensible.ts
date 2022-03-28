const trollToken = {
    name: "Troll",
    symbol: "TRL",
    decimal: 6,
    totalSupply: 100000000,
};

Object.preventExtensions(trollToken);

trollToken.money = 23234;
delete trollToken.money
trollToken.name = "Access"

// it is mutable but it's properties can't be deleted
console.log(trollToken)

// { 
//   name: 'Access',
//   symbol: 'TRL',
//   decimal: 6,
//   totalSupply: 100000000 
// }

console.log(Object.getOwnPropertyDescriptors(trollToken))
// all proeprties wtih writable,enumerable and configurable
// set to true

// Although it is behaving like sealed but isn't sealed
console.log(Object.isFrozen(trollToken)) // false
console.log(Object.isSealed(trollToken)) // false
console.log(Object.isExtensible(trollToken)) // false

// We can delete properties but can't add new ones

delete trollToken.name
trollToken.name = "Hamza"
console.log(trollToken) // { symbol: 'TRL', decimal: 6, totalSupply: 100000000 }


// For making it sealed, make configurable and writable to false
// of each property inside object
