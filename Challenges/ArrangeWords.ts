const arrange = (sentence: string): string => {
  let normalizedString: string[] = sentence
    .toLowerCase()
    .split('.')
    .join('')
    .split(' ')
  let sortedArray: string[] = normalizedString.sort(
    (a, b) => a.length - b.length
  )
  let str: string = `${sortedArray.join(' ')}.`
  return (str[0].toUpperCase() + str.slice(1)) as string
}

let str1 = 'The lines are printed in reverse order.'
let str2 = 'Here i come.'
let str3 = 'I love to code.'

console.log(arrange(str2))
console.log(arrange(str1))
