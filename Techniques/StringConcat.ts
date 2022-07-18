// Method # 1
const str1 = "Hello";
const str2 = str1.concat(" ", "World");
console.log(str2) // Hello World


// Method # 2
console.log(['Hello', 'World'].join(' ')) // Hello World


// Method # 3 (a)
const str3 = 'Hello' + ' ' + 'World';
console.log(str3); // 'Hello World'

// Method # 3 (b)
let str4 = "Hello"
str4+=" "
str4+="World"
console.log(str4) // 'Hello World'
