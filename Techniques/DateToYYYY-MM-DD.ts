const date = new Date();

console.log(date); // 2022-03-28T05:54:59.507Z

console.log(date.toString()); // Mon Mar 28 2022 05:54:59 GMT+0000 (GMT)

console.log(date.toISOString()); // 2022-03-28T05:54:59.507Z

console.log(date.toISOString().split("T")[0]) // // 2022-03-28

console.log(date.toISOString().split("T")[0].split("-").reverse().join("-")); // 28-03-2022
