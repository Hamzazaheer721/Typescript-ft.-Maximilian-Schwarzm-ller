type Combinable = number | string
type IConversionDescriptorType = "as-number" | "as-text"

const combine = (
  _val1: Combinable, // this is type Aliasing
  _val2: Combinable,
  resultConverstion: IConversionDescriptorType   //This is called type Literals
): number | string => {
  let result: number | string
  if (typeof _val1 === "number" && typeof _val2 === "number" || resultConverstion === "as-number") {
    result = +_val1 + +_val2
  } else {
    result = _val1.toString() + String(_val2)
  }
  return result
}

let combinedAges = combine("25", 26, "as-number")
console.log(combinedAges) //51
combinedAges = combine("Max", " Alan", "as-text")
console.log(combinedAges) //Max Alan

