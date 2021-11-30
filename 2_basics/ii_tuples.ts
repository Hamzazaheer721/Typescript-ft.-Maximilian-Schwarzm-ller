// tuples are a sort of list that can store limited set of items 
// In js, the tuples are created using arrays
// you create tuples using [type, type, type] syntaxt

const tuple1: [string, number, [number , number]] = ["hamza", 25, [53, 53]]

for (let [key,value] of Object.entries(tuple1)){
  console.log([key, value])
}
// this shows that array is iterable object
// ['0', 'hamza']
// ['1', 25]
// ['2', [53,53]]

let _val: [number, number] = tuple1[2];
let string_al: string = tuple1[0]
