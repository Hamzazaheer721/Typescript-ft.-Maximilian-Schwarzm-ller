const convert = (str) => {
    return str.toLocaleDateString('en-GB').split('/').reverse().join('-');
}

const date = "2020-02-12T16:47:27.289+00:00"
const normalDate = "2020-02-12";

console.log('Date => ',date); // Date =>  2020-02-12T16:47:27.289+00:00

const _date = new Date(date); 
const _normalDate = new Date(normalDate); 

console.log('Date (new Date) => ', _date); // Date (new Date) =>  2020-02-12T16:47:27.289Z
console.log('Normal Date (new Date) => ', _normalDate); // Normal Date (new Date) =>  2020-02-12T00:00:00.000Z

console.log('Date (new Date) => ', convert(_date)) // Date (new Date) =>  2020-02-12
console.log('Normal Date (new Date) => ', convert(_normalDate)) // Normal Date (new Date) =>  2020-02-12
