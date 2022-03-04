const arr = [
  ['Work', 9],
  ['Eat', 1],
  ['Commute', 2],
  ['Play Game', 1],
  ['Sleep', 7]
]

const _arr = [...arr] // Deep copy
const __arr = arr.slice(0) // Shallow Copy

__arr[3] = ['Parent Changed', 3] // Shallow Copy Changes
_arr[3] = ['Play Dota', 2] // Deep copy changes

console.table(arr)
console.table(_arr)
console.table(__arr)
