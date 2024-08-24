const a = 'DDUUDDUDUUUD'.trim(); 

// Method # 1
// return value of match is array of string if atleast one match exists
// if the match doesn't exist then it will return null
const matches = a.match(/DDU/g); 
const count = matches ? matches.length : 0; 

// Method # 2
let position = a.indexOf('DDU'); // 0
// return value of indexOf is number 
// in falsy case, it will return -1
let count_two = 0;

while (position !== -1) {
    count_two++;
    position = a.indexOf('DDU', position + 1);
}

console.info({count, count_two});
// count : 2 , count_two : 2
