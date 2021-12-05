// array.indexOf returns the first index at which the given element can be found in the array or -1 if its not present

const beasts = ["Elephant", "Tiger", "Lion", "Giraffe", "Dragon", "Cow"]

console.log(beasts.splice(beasts.indexOf("Lion"), 1)) // this will remove the lion from the array
console.log(beasts)

//////////////////////////
//////// CLASSES ////////
////////////////////////

class TextStorage<T> {
  constructor(private data: T[] = []) {}
  addItem(_dataEntry: T) {
    this.data.push(_dataEntry)
  }
  removeItem(_dataEntry: T) {
    if (this.data.includes(_dataEntry)) {
      this.data.splice(this.data.indexOf(_dataEntry), 1)
    }
  }
  get getInfo() {
    return this.data
  }
}

const textStorage = new TextStorage<string>()
console.log("Data inside TextStorage: ", textStorage.getInfo) // []

textStorage.addItem("Safari")
console.log("Data inside TextStorage: ", textStorage.getInfo)

// textStorage.addItem(3) // You can't add string here
textStorage.addItem("Chrome")
textStorage.addItem("Explorer")
textStorage.addItem("Opera")
textStorage.addItem("Firefox")
console.log("Data inside TextStorage: ", textStorage.getInfo)

textStorage.removeItem("Opera")
console.log("Data inside TextStorage: ", textStorage.getInfo)

//////////////////////
/////// NOTE ////////
////////////////////

const objectStorage = new TextStorage<object>()
objectStorage.addItem({ name: "Hamza" })
objectStorage.addItem({ name: "Zaheer" })
objectStorage.addItem({ name: "Xapper" })
objectStorage.addItem({ name: "Ali" })

console.log(objectStorage.getInfo)

// [ { name: 'Hamza' },
// { name: 'Zaheer' },
// { name: 'Xapper' },
// { name: 'Ali' } ]

objectStorage.removeItem({name: "Hamza"}) // this won't work since object is a pointer and we are added new Object although it looks same

console.log(objectStorage.getInfo)

// [ { name: 'Hamza' },
// { name: 'Zaheer' },
// { name: 'Xapper' },
// { name: 'Ali' } ]

////////////////////////////
//////// SOLUTION /////////
//////////////////////////

const _obj = {name: "Azam"}
objectStorage.addItem(_obj)
console.log(objectStorage.getInfo)

//   [ { name: 'Hamza' },
//   { name: 'Zaheer' },
//   { name: 'Xapper' },
//   { name: 'Ali' },
//   { name: 'Azam' } ]

objectStorage.removeItem(_obj) // this will work now, since the memory address is same for the object we are appeneding and removing
console.log(objectStorage.getInfo)

// [ { name: 'Hamza' },
//   { name: 'Zaheer' },
//   { name: 'Xapper' },
//   { name: 'Ali' } ]

/////////////////////////
//////// NOTE //////////
///////////////////////

// We should avoid using non-primitive types for this class
// Solution is to add the type constraints to class and add T extends boolean | number | string

