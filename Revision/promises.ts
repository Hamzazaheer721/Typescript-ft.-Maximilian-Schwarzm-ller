const callApi = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(5)
        },1000)
    })
}

const callApiWithError = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(5)
        },1000)
    })
}

 
const func1 = () => {
    return callApi().then((res) => {
        return res;
    }).catch(error => {
        throw error
    })
}


const func2 = () => {
    return new Promise ((res, rej) => {
        callApiWithError(response => {
            res(response)
        }).catch((err) => {
            rej(err)
        })
    })
}


const func3 = async () => {
    try {
        const response = await callApiWithError();
        return response;
    } catch(err) {
        throw err;
    }
}



const main = async () => {
    try{
        const response1 = await func3();
        console.info({response1})
    } catch(err){
        console.info({err})
    }
}


main();
