const func_ = (arr) => {
  let arr_ = []
  arr.forEach((str) => {
    let changes = 0
    let val = str.split('')
    for (let i = 0; i < val.length; i++) {
      if (val[val.length - 1] !== i && val[i] === val[i + 1]) {
        val[i + 1] = i
        changes++
      }
    }
    arr_.push(changes)
  })
  return arr_
}

console.log(func_(['add', 'boook', 'break', 'dab']))
