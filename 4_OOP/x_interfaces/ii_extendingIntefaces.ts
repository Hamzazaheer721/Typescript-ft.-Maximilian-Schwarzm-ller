interface IHuman {
  breathing: boolean
}

interface IPerson extends IHuman {
  name: string
  age: number
}

const _obj: IPerson = {
  age: 23,
  breathing: true,
  name: "Hamza Zaheer"
}

console.log(_obj)