const obj_1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

const obj_2 = {
  a: 11,
  b: 22,
  c: 33,
  d: 44
}

let t1, t2, t3, t4

t1 = performance.now()
const method1 = JSON.stringify(obj_1) === JSON.stringify(obj_2)
t2 = performance.now()
t3 = (t2 - t1) / 1000

t1 = performance.now()
const method2 =
  Object.entries(obj_1).sort().toString() ===
  Object.entries(obj_2).sort().toString()
t2 = performance.now()
t4 = (t2 - t1) / 1000

console.log(
  t3 > t4
    ? `JSON Serialization is ${(t3 / t4).toFixed(2)} times slower`
    : `JSON Serialization is ${(t4 / t3).toFixed(2)} times faster`
)
// JSON Serialization is 3.09 times slower
