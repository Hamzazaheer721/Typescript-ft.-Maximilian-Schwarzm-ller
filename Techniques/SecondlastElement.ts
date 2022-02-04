const getSecondLastElement = <T extends string>(
  str: T,
  condition: string = ' '
): string => {
  return str.split(condition).slice(-2)[0]
}

const arr = 'Hi My name is Hamza'

console.log(arr)
