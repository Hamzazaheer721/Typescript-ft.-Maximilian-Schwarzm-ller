// Record can be used to map the properties of one type to anther. 
// Constructs an object whose property Keys are keys and property values are Type.

// Record<'string | number | symbol', any type you want to give> 

///////////////////
/// Method # 1 ///
/////////////////

// type CustomType = {
//     [x: string]: number;
// }

///////////////////
/// Method # 2 ///
/////////////////

// type CustomType = Record<string, number>

// Method # 1 === Method # 2 but Method # 2 is better

type CustomType = Record <string, number>

const contact: CustomType = {
    phone_no: 312_5311_230,
    mobile_no: 312_7911_706
}

interface IPerson {
    name: string,
    city: string
}

const person: Record<string, IPerson> = {
    American: {
        name: "Adrian",
        city: "USA"
    },
    Pakistani: {
        name: "Hamza",
        city: "Islamabad"
    }
}

interface IManager extends IPerson {
    company_name: "Google"
}

type Nationality = "Pakistani" | "American" | "KSA"


const manager: Record<Nationality, CustomType> = {
    American: {
        id: 312_412
    },
    Pakistani: {
        id: 2313_23
    },
    KSA: {
       id: 1233_51 
    }
}

const obj : {[key : string]: number} = {
    // name: "Hamza", // it will give error since our key should have value as number
    id: 23,
    salary: 60_000 * 2
}


const manager_: 
    {
        [K in Nationality]: 
            {
                [T: string]: number
            }
    } = {
    American: {
        id: 23_323
    },
    KSA: {
        id: 356_31
    },
    Pakistani: {
        id: 977_52
    }
}
