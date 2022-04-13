const method = async (key) =>{
    async function addFunc (a,b)  {
        return a + b;
    }

    const res = await Promise.all([
        addFunc(2,3),
        ...((key === 2) ? [addFunc(3,4)] : [])
    ])
    
    const obj = res.reduce((acc, curr, idx) => {
      acc[idx] = curr;
      return acc;
    },{})
    
    console.log(obj)
}

method(1) // { '0': 5 }

method(2) // { '0': 5, '1': 7 }

