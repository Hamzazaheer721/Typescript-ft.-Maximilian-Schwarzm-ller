const myHobbies: Array<string> = [
  'Cycling',
  'Gardening',
  'Reading',
  'Singing',
  'Coding',
  'Hiking',
  'Exercising',
  'Writing'
]

/* Method # 1 */
const cycling = myHobbies[0]
console.info(cycling) // Cycling

/* Method # 2 */
const [cycling_, gardening_, , , coding_, ...rest_] = myHobbies
console.info(cycling_) // Cycling
console.info(gardening_) // Gardening
console.info(coding_) // Coding
console.info(rest_) // ["Hiking", "Exercising", "Writing"]

/* Method # 3 */
const { 0: cycling__, 5: hiking__ } = myHobbies
console.log(cycling__) // Cycling
console.log(hiking__) // Hiking
