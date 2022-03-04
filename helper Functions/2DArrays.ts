const arr = [
  ['Work', 9],
  ['Eat', 1],
  ['Commute', 2],
  ['Play Game', 1],
  ['Sleep', 7]
]

// Shallow Copy
const _arr = arr.slice(0)

// Deep Copy

/* Method # 1 */
const arr_ = [...arr]

/* Method # 2 */
const arr__ = arr.map((el) => el)

/* Method # 3 */
const arr___ = []
arr.forEach((el) => {
  arr___.push(el)
})

// Shallow copy changes
_arr[3] = ['Play Dota', 2]

// Deep Copy Changes
arr_[3] = ['Parent Changed', 3]
arr__[3] = ['Parent Changed', 4]
arr___[3] = ['Parent Changed', 5]

console.table(arr)

console.table(_arr)

console.table(arr_)
console.table(arr__)
console.table(arr___)
