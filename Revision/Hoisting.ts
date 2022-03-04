var number = 20

const func_ = () => {
  console.log(number) // undefined
  var number = 10
  console.log(number) // 10
}

console.log(number) // 20
console.log(func_()) // undefined
