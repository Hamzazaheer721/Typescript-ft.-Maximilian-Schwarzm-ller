
const makePyramid = (length = 12) => {
    const half = Math.ceil(length/2)
    let n = 0;
    for (let i = 0; i <= half; i++){
        n = 2 * i + 1
        console.log("*".repeat(n))
    }
    for(let i = half - 1; i >=0; i-- ){
        n = 2 * i + 1
        console.log("*".repeat(n))
    }
}

makePyramid(14)


// *
// ***
// *****
// *******
// *********
// ***********
// *************
// ***************
// *************
// ***********
// *********
// *******
// *****
// ***
// *
