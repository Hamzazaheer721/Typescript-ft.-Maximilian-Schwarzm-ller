let button = document.querySelector("button") as HTMLButtonElement
let number1 = document.getElementById("input1")! as HTMLInputElement
let number2 = document.getElementById("input2")! as HTMLInputElement

const sum = (num1: number, num2: number) => {
  return num1 + num2
}

if (button) {
  button.addEventListener("click", (e) => {
    e.preventDefault()
    console.info("Sum: ", sum(+number1.value, +number2.value))
  })
}
