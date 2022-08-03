const obj = {
    a: {
        b: 1,
        c: 2,
        d: {
            e: 3
        }
    }
}


const { a: { b: secondKey, d: { e: lastKey}, ...rest} } = obj;
console.log(lastKey) // 3
console.info(rest) // { c = 3 }
