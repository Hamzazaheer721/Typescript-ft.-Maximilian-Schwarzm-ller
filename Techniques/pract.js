function academicNotes(objectNotes) {
  if (Array.isArray(objectNotes)) {
    throw new Error('Not an object')
  } else if (objectNotes && Object.keys(objectNotes).length === 0) {
    throw new Error('Object is empty')
  }
  let accumulatedPercentage = 0
  let accumulatedNote = 0
  for (key in objectNotes) {
    if (isNaN(key) || key === null || key === undefined || key === '') {
      throw new Error('Some key is not a number')
    }
    if (key < 0 || key > 5) {
      throw new Error('Some key is out of range')
    }
    if (
      objectNotes[key] === null ||
      objectNotes[key] === undefined ||
      objectNotes[key] === '' ||
      !Number.isInteger(objectNotes[key])
    ) {
      throw new Error('Some value is not an integer')
    }
    if (objectNotes[key] < 1 || objectNotes[key] > 100) {
      throw new Error('Some value is out of range')
    }
    accumulatedPercentage = accumulatedPercentage + objectNotes[key]
  }
  if (accumulatedPercentage > 100) {
    throw new Error('Total sum of percentage values exceeds the maximum')
  }

  for ([key, value] of Object.entries(objectNotes)) {
    accumulatedNote = accumulatedNote + key * value
  }
  accumulatedNote = accumulatedNote / 100

  return { accumulatedPercentage, accumulatedNote }
}
console.log(academicNotes({ 2.9: 40, 3.1: 30 }))
