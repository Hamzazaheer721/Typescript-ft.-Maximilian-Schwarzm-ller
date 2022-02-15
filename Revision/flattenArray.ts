const flattenArray = (arr, depth) => {
  return depth > 0
    ? arr.reduce(
        (acc, curr) =>
          acc.concat(
            Array.isArray(curr) ? flattenArray(curr, depth - 1) : curr
          ),
        []
      )
    : arr.slice()
}

const arr_ = [
  [[[[[[[[[[2, 3, 5], 7, 8], "Javascript"]]]], "Typescript"]]]],
  4,
  [1],
  [9, [6, "10"]]
]

console.info(flattenArray(arr_, Infinity)) // [ 2, 3, 5, 7, 8, 'Javascript', 'Typescript', 4, 1, 9, 6, '10' ]
