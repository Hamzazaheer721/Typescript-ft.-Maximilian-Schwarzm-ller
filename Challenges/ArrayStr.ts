const ArrayStr = (arr: string[]) => {
  let first = 'hey Hamza I ma good'
  let second = 'hamza'
  let firstArray = first.split(' ')
  console.log(firstArray, typeof firstArray)
  let str = firstArray.join('')
  console.log(str)
}

const str = ['hellocat', 'apple,bat,cat,goodbye,hello,yellow,why']
console.log(ArrayStr(str))
