const findSubstring = (s) => {
  if (typeof s !== 'string') return
  const isVowel = (x) => {
    return x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u'
  }
  let unique = new Set()
  let arr = []
  let n = s.length
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (!isVowel(s[j])) break
      unique.add(s[j])
      if (unique.size == 5) arr.push(s.substring(i, j + 1))
    }
    unique.clear()
  }
  return arr
}

let str1 = 'aeioaexaaeuiou'
let str2 = 'axyzaeiou'
let str = 23213
console.log(findSubstring(str))
