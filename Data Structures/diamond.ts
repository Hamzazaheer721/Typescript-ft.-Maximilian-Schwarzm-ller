
const makeDiamond = (length = 12) => {
    const half = Math.ceil(length/2)
    let n = 0;
    let emptySpaces = 0
    for (let i = 0; i <= half; i++){
        n = 2 * i + 1
        emptySpaces = half - i;
        console.log(" ".repeat(emptySpaces) + "*".repeat(n) + " ".repeat(emptySpaces))
    }
    for(let i = half - 1; i >=0; i-- ){
        n = 2 * i + 1
        emptySpaces = half - i;
        
        console.log(" ".repeat(emptySpaces) + "*".repeat(n) + " ".repeat(emptySpaces))
    }
}

makeDiamond(10)


//      *     
//     ***    
//    *****   
//   *******  
//  ********* 
// ***********
//  ********* 
//   *******  
//    *****   
//     ***    
//      *     
